import "../styles/globals.css";
import TagManager from "react-gtm-module";
import { useEffect } from "react";

const tagManagerArgs = {
  gtmId: "G-226G38XNWT",
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
