import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Layout from "@/layout";


export default function Home() {
  return (
    <Layout metaTitle="Home" metaDescription="Ini Halaman Home">
      <p>Ini Halaman Home</p>
    </Layout>
  );
}
