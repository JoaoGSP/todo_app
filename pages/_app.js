/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";

import { Provider } from "react-redux";

import themeStore from "../src/store/themeStore";

import ThemeMaster from "../styles/themes/themeMaster";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={themeStore}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeMaster />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
