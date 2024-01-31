import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

import useCreateTxHook from './hooks';

export default function Form() {
  // Import the hook
  const { connected } = useWallet();
  const { amount, setAmount, token, setToken, onTxClick } = useCreateTxHook();

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h2 className="text-3xl">Solana Namespace Toolkit</h2>
      <hr style={{ color: 'gray', backgroundColor: 'gray', height: 35 }} />
      <p>1. Trigger Wallet Connect</p>
      <WalletMultiButton className="btn" />
      <hr style={{ color: 'gray', backgroundColor: 'gray', height: 35 }} />
      <p>2. Transfer Tokens to Address</p>
      {connected ? (
        <div className="w-full flex flex-col justify-center items-center">
          <label>Amount</label>
          <input
            type="text"
            className="w-[20%] mb-5"
            onChange={(e) => setAmount(e.target.value)}
          />
          <label>Address</label>
          <input
            type="text"
            className="w-[20%] mb-5"
            onChange={(e) => setToken(e.target.value)}
          />
          <button
            className="border-b border-emerald-300 p-1"
            onClick={() =>
              onTxClick({
                isToken: true,
                address: 'HPaeP1UwhNtiDexKrjeJNWmam7QnTKQNnuvMx3Ama2f7',
                amount: amount,
                tokenAddress: token,
              })
            }
          >
            Submit
          </button>
        </div>
      ) : (
        <p>Not Connected</p>
      )}
      <div className="mb-5"></div>
      <p>SILLY: 7EYnhQoR9YM3N7UoaKRoA44Uy8JeaZV3qyouov87awMs</p>
    </div>
  );
}
