/// <reference types="react" />
import { ButtonState, onTxClickArgs } from './types';
export default function useCreateTxHook(): {
    token: string;
    amount: string;
    txState: ButtonState;
    onTxClick: ({ isToken, address, amount, tokenAddress, }: onTxClickArgs) => Promise<void>;
    setToken: import("react").Dispatch<import("react").SetStateAction<string>>;
    setAmount: import("react").Dispatch<import("react").SetStateAction<string>>;
    setTxState: import("react").Dispatch<import("react").SetStateAction<ButtonState>>;
};
