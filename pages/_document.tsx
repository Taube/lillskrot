import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="/vendors/themify-icons/css/themify-icons.css"
          />
        </Head>
        <body
          data-spy="scroll"
          data-target=".navbar"
          data-offset="40"
          id="home"
        >
          <Main />
        </body>
        <NextScript />
        <script src="/vendors/jquery/jquery-3.4.1.js" />
        <script src="/vendors/bootstrap/bootstrap.bundle.js" />
        <script src="/vendors/bootstrap/bootstrap.affix.js" />
        <script src="/vendors/isotope/isotope.pkgd.js" />
        <script src="/js/leadmark.js" />
      </Html>
    );
  }
}
