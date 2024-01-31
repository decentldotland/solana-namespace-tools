export async function fetcher<T>(url: string, options?: RequestInit) {
  const res = await fetch(url, options);

  if (res.status !== 200) {
    throw new Error(res.statusText);
  }

  return (await res.json()) as T;
}

import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { clusterApiUrl } from '@solana/web3.js';

export const SOLANA_MAIN = clusterApiUrl(WalletAdapterNetwork.Mainnet);
export const SOLANA_TEST = clusterApiUrl(WalletAdapterNetwork.Testnet);
export const SOLANA_DEV = clusterApiUrl(WalletAdapterNetwork.Devnet);
export const GENESYSGO = 'https://ssc-dao.genesysgo.net';
export const METAPLEX = 'https://api.metaplex.solana.com';
export const SERUM = 'https://solana-api.projectserum.com';
export const HELIUS = `https://rpc.helius.xyz/?api-key=${process.env.HELIUS_API_KEY}`;
export const NEW_HELIUS = `https://mainnet.helius-rpc.com/?api-key=${process.env.HELIUS_API_KEY}`;

// You can use any of the other enpoints here
export const NETWORK = NEW_HELIUS;
