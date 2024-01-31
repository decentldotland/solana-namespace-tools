import React, { useMemo } from "react";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

import "../styles/globals.css";
import "../styles/App.css";


const Wrapper = dynamic(
  async () =>
    (await import("solana-namespace-toolkit")).Wrapper,
  { ssr: false }
);

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
}

export default MyApp;
