import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function() {
                var ta = document.createElement('script'); ta.type = 'text/javascript'; ta.async = true;
                ta.src = 'https://analytics.tiktok.com/i18n/pixel/sdk.js?sdkid=BU691HDBQ1HOVJLH99A0';
                var s = document.getElementsByTagName('head')[0];
                s.insertBefore(ta, s.firstChild);
              })();
          `,
            }}
          />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-6RQT77NM96" /> 
          <script dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-6RQT77NM96');
                      `,
            }}
          />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}