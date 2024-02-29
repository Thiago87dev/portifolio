import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="#" />
        <title>Thiago Alves</title>
      </Head>
      <Navbar />
      <main className="p-5 mt-10 ">{children}</main>
      <Footer/>
    </>
  );
};

export default Layout;
