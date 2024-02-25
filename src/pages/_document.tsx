import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="mx-auto w-4/5 md:w-3/5 bg-black overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
