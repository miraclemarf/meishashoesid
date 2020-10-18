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
                ta.src = 'https://analytics.tiktok.com/i18n/pixel/sdk.js?sdkid=BU67PK5BQ1HOVJLH97PG';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(ta, s);
              })();
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