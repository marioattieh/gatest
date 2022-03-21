import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-WZD247MMFQ" />
      <Script>
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
