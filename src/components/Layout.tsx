import Head from "next/head"

const Layout = ({children}:{children: React.ReactNode}) => {
  return (
    <>
        <Head>
            <link rel="shortcut icon" href="#" />
            <title>Portifolio</title>
        </Head>
        <main className="">{children}</main>
    </>
  )
}

export default Layout