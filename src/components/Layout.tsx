import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="#" />
        <title>Thiago Alves</title>
      </Head>
      <Navbar />
      <main className="p-5 mt-10">{children}</main>
    </>
  );
};

export default Layout;
