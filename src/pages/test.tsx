import { ButtonState } from "@components/home/button";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useState } from "react";
import toast from "react-hot-toast";
import { TxCreateData } from "./api/tx/create";
import { fetcher } from "@utils/use-data-fetch";
import { PublicKey, Transaction } from "@solana/web3.js";
import { TxSendData } from "./api/tx/send";
import { TxConfirmData } from "./api/tx/confirm";

export default function Test() {
    // Import the hook
    const { publicKey, signTransaction, connected, signMessage } = useWallet();
    const [amount, setAmount] = useState("");
    const [token, setToken] = useState("");
    const [txState, setTxState] = useState<ButtonState>("initial");

    const onTxClick =
    ({
      isToken = false,
      address,
      amount,
      tokenAddress,
    }: {
      isToken: boolean;
      address?: string;
      amount?: string;
      tokenAddress?: string;
    }) =>
    async () => {

      if (connected && publicKey && signTransaction && txState !== "loading") {
        console.log("PK: ", publicKey);
        setTxState("loading");
        const buttonToastId = toast.loading("Creating transaction...", {
          id: `buttonToast${isToken ? "Token" : ""}`,
        });

        try {
          // Create transaction
          let { tx: txCreateResponse } = await fetcher<TxCreateData>(
            "/api/tx/create",
            {
              method: "POST",
              body: JSON.stringify({
                payerAddress: publicKey.toBase58(),
                receiverAddress: address
                  ? new PublicKey(address).toBase58()
                  : undefined,
                amount: amount,
                type: isToken ? "token" : "sol",
                tokenAddress: tokenAddress
              }),
              headers: { "Content-type": "application/json; charset=UTF-8" },
            }
          );
          console.log("payload: ", {
            method: "POST",
            body: JSON.stringify({
              payerAddress: publicKey.toBase58(),
              receiverAddress: address
                ? new PublicKey(address).toBase58()
                : undefined,
              amount: amount,
              type: isToken ? "token" : "sol",
              tokenAddress: tokenAddress
            }),
            headers: { "Content-type": "application/json; charset=UTF-8" },
          });
          const tx = Transaction.from(Buffer.from(txCreateResponse, "base64"));

          // Request signature from wallet
          const signedTx = await signTransaction(tx);
          const signedTxBase64 = signedTx.serialize().toString("base64");

          // Send signed transaction
          let { txSignature } = await fetcher<TxSendData>("/api/tx/send", {
            method: "POST",
            body: JSON.stringify({ signedTx: signedTxBase64 }),
            headers: { "Content-type": "application/json; charset=UTF-8" },
          });

          setTxState("success");
          toast.success(
            (t) => (
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

          const confirmationToastId = toast.loading(
            "Confirming transaction..."
          );

          const confirmationResponse = await fetcher<TxConfirmData>(
            "/api/tx/confirm",
            {
              method: "POST",
              body: JSON.stringify({ txSignature }),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            }
          );

          if (confirmationResponse.confirmed) {
            toast.success("Transaction confirmed", {
              id: confirmationToastId,
            });
          } else {
            toast.success("Error confirming transaction", {
              id: confirmationToastId,
            });
          }
        } catch (error: any) {
          setTxState("error");
          toast.error("Error creating transaction Here", { id: buttonToastId });
        }
      }
    };

    return(
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <h2 className="text-3xl">Solana Namespace Toolkit</h2>
            <hr style={{ color: 'gray', backgroundColor: 'gray', height: 35 }} />
            <p>1. Trigger Wallet Connect</p>
            <WalletMultiButton className="btn" />
            <hr style={{ color: 'gray', backgroundColor: 'gray', height: 35 }} />
            <p>2. Transfer Tokens to Address</p>
            {connected ?
            <div className="w-full flex flex-col justify-center items-center">
                <label>Amount</label>
                <input type="text" className="w-[20%] mb-5" onChange={(e) => setAmount(e.target.value)}/>
                <label>Address</label>
                <input type="text" className="w-[20%] mb-5" onChange={(e) => setToken(e.target.value)}/>
                <button className="border-b border-emerald-300 p-1" onClick={onTxClick({ 
                    isToken: true,
                    address: "HPaeP1UwhNtiDexKrjeJNWmam7QnTKQNnuvMx3Ama2f7",
                    amount: amount,
                    tokenAddress: token
                })}>Submit</button>
 
            </div>
            :
            <p>Not Connected</p>}
            <div className="mb-5"></div>
            <p>SILLY: 7EYnhQoR9YM3N7UoaKRoA44Uy8JeaZV3qyouov87awMs</p>
        </div>
    );
}
