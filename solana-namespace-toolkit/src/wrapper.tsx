import React, { useMemo } from 'react';
import type { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import { ConnectionProvider } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import ClientWalletProvider from './walletProvider';
import { NETWORK } from './utils';

import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';

export default function Wrapper({ children }: { children: ReactNode }) {
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

  return (
    <ConnectionProvider endpoint={NETWORK}>
      <ClientWalletProvider wallets={wallets}>
        <WalletModalProvider>
          <Toaster position="bottom-right" reverseOrder={true} />
          {children}
        </WalletModalProvider>
      </ClientWalletProvider>
    </ConnectionProvider>
  );
}
