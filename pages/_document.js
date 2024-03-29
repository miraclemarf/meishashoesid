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
          <script dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1300555053629135');
            fbq('track', 'PageView');
            `,
          }}
          />
          <meta name="facebook-domain-verification" content="9z2tayjnw2i67q23zhrd3goimd8d6d" />
        </Head>
        <body>
          <noscript  dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=1300555053629135&ev=PageView&noscript=1" />`,
          }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}