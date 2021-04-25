import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US" className="antialiased">
        <Head>
          <link
            rel="preload"
            as="font"
            href="/fonts/regular.woff2"
            crossOrigin="true"
            type="font/woff2"
          />
          <link
            rel="preload"
            as="font"
            href="/fonts/medium.woff2"
            crossOrigin="true"
            type="font/woff2"
          />
          <link
            rel="preload"
            as="font"
            href="/fonts/bold.woff2"
            crossOrigin="true"
            type="font/woff2"
          />
          <meta name="theme-color" content="#0047AB" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
