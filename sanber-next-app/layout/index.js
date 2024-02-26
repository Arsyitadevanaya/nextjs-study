import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Layout({children, metaTitle, metaDescription}){
  return(
    <>
      <Head>
        <title>Create Next App - {metaTitle}</title>
        <meta name="description" content={metaDescription || "Next App"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      {children}
      <Footer/>
    </>
  )
}