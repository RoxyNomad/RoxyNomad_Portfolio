// src/adapters/pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="de">
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="RoxyNomad" />
          <meta name="author" content="Roxana Zwicky" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" href="/pictures/favicon.ico" />
        </Head>
        <body style={{margin: 0}}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
