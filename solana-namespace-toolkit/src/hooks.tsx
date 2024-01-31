import { useState } from 'react';
import toast from 'react-hot-toast';
import { useWallet } from '@solana/wallet-adapter-react';
import { PublicKey, Transaction } from '@solana/web3.js';

import { fetcher } from './utils';
import {
  ButtonState,
  TxConfirmData,
  TxCreateData,
  TxSendData,
  onTxClickArgs,
} from './types';

export default function useCreateTxHook() {
  // Import the hook

  const { publicKey, signTransaction, connected } = useWallet(); //signMessage
  const [amount, setAmount] = useState('');
  const [token, setToken] = useState('');
  const [txState, setTxState] = useState<ButtonState>('initial');

  async function onTxClick({
    isToken = false,
    address,
    amount,
    tokenAddress,
  }: onTxClickArgs) {
    if (connected && publicKey && signTransaction && txState !== 'loading') {
      console.log('PK: ', publicKey);
      setTxState('loading');
      const buttonToastId = toast.loading('Creating transaction...', {
        id: `buttonToast${isToken ? 'Token' : ''}`,
      });

      try {
        // Create transaction
        let { tx: txCreateResponse } = await fetcher<TxCreateData>(
          '/api/tx/create',
          {
            method: 'POST',
            body: JSON.stringify({
              payerAddress: publicKey.toBase58(),
              receiverAddress: address
                ? new PublicKey(address).toBase58()
                : undefined,
              amount: amount,
              type: isToken ? 'token' : 'sol',
              tokenAddress: tokenAddress,
            }),
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
          }
        );
        console.log('payload: ', {
          method: 'POST',
          body: JSON.stringify({
            payerAddress: publicKey.toBase58(),
            receiverAddress: address
              ? new PublicKey(address).toBase58()
              : undefined,
            amount: amount,
            type: isToken ? 'token' : 'sol',
            tokenAddress: tokenAddress,
          }),
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
        });
        const tx = Transaction.from(Buffer.from(txCreateResponse, 'base64'));

        // Request signature from wallet
        const signedTx = await signTransaction(tx);
        const signedTxBase64 = signedTx.serialize().toString('base64');

        // Send signed transaction
        let { txSignature } = await fetcher<TxSendData>('/api/tx/send', {
          method: 'POST',
          body: JSON.stringify({ signedTx: signedTxBase64 }),
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
        });

        setTxState('success');
        toast.success(
          (t: any) => (
            <a
              href={`https://solscan.io/tx/${txSignature}`}
              target="_blank"
              rel="noreferrer"
            >
              Transaction created
            </a>
          ),
          { id: buttonToastId, duration: 10000 }
        );

        const confirmationToastId = toast.loading('Confirming transaction...');

        const confirmationResponse = await fetcher<TxConfirmData>(
          '/api/tx/confirm',
          {
            method: 'POST',
            body: JSON.stringify({ txSignature }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          }
        );

        if (confirmationResponse.confirmed) {
          toast.success('Transaction confirmed', {
            id: confirmationToastId,
          });
        } else {
          toast.success('Error confirming transaction', {
            id: confirmationToastId,
          });
        }
      } catch (error: any) {
        setTxState('error');
        toast.error('Error creating transaction Here', { id: buttonToastId });
      }
    }
  }
  return { token, amount, txState, onTxClick, setToken, setAmount, setTxState };
}
