import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" type="image/svg+xml" href="https://i.imgur.com/qscsMyf.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
            {/* SVG sprite içeriği burada olacak */}
          </svg>
        </body>
      </Html>
    );
  }
}
