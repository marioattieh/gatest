import "../styles/globals.css";
import TagManager from "react-gtm-module";
import { useEffect } from "react";

const tagManagerArgs = {
  gtmId: "G-WZD247MMFQ",
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
    TagManager.dataLayer({
      dataLayer: {
        event: "pageview",
        page: window.location.pathname,
      },
    });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
