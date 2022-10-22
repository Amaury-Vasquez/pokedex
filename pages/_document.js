import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <link rel="apple-touch-icon" href="/template.png"></link> */}
          <meta name="theme-color" content="#ff4500" />
          {/* <link rel="shortcut icon" href="/template.ico" /> */}
          {/* <link rel="manifest" href="./manifest.json" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
