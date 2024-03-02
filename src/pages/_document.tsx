import Footer from "@/components/Footer";
import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="mx-auto md:w-4/5 bg-black overflow-x-hidden ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
