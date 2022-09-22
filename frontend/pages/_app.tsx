import Layout from "components/layout";
import { AddProductContext } from "context/context";
import type { AppProps } from "next/app";

import "../Styles/styles.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <AddProductContext>
        <Component {...pageProps} />
      </AddProductContext>
    </Layout>
  );
}
