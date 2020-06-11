import Document, { Head, Main, NextScript } from 'next/document'

import { GA_TRACKING_ID } from '../lib/gtag'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MC8RLMQ');
            `
            }}>
          </script>
        </Head>
        <body>
          {/*add style="display:none;visibility:hidden"*/}
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MC8RLMQ"
            height="0" width="0" ></iframe></noscript>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
