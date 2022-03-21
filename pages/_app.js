import Script from "next/script";
import TagManager from "react-gtm-module";
import { useEffect } from "react";

//GTM-W5SLPK3

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({
      gtmId: "GTM-W5SLPK3",
    });
  }, []);
  return (
    <>
      <Script
        id="gtm"
        src="https://www.googletagmanager.com/gtag/js?id=G-WZD247MMFQ"
      />
      <Script id="gtm1">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-WZD247MMFQ');`}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
