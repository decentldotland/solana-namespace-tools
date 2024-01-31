export type TxCreateData = {
  tx: string;
};

export type Input = {
  payerAddress: string;
  receiverAddress?: string;
  amount?: number;
  type: 'sol' | 'token';
  tokenAddress: string;
};

export type TxSendData = {
  txSignature: string;
};

export type TxConfirmData = {
  confirmed: boolean;
  message: string;
};

export interface onTxClickArgs {
  isToken: boolean;
  address?: string;
  amount?: string;
  tokenAddress?: string;
}

export type ButtonState = 'initial' | 'loading' | 'success' | 'error';
