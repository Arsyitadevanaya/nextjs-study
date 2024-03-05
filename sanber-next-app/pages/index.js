
// import Layout from "@/layout";
import Image from "next/image";
import dynamic from "next/dynamic";

const LayoutDynamic = dynamic(() => import("@/layout"))


export default function Home() {
  return (
    <LayoutDynamic metaTitle="Home" metaDescription="Ini Halaman Home">
      <p>Ini Halaman Home</p>
      {/* <Image src="/gambar.png" width={100} height={100} alt="Gambar" />
      <img src="/gambar.png" style={{ width:100, height:100 }}  /> */}
    </LayoutDynamic>
  );
}

