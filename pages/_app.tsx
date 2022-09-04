import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import { IconlyProvider } from "react-iconly";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    type: "dark",
    theme: {},
  });

  return (
    <NextUIProvider theme={theme}>
      <Head>
        <title>Cesta</title>
      </Head>
      <IconlyProvider set='two-tone' stroke='bold' >
        <Component {...pageProps} />
      </IconlyProvider>
    </NextUIProvider>
  );
}

export default MyApp;
