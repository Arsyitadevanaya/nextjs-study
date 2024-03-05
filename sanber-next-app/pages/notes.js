
// import Layout from "@/layout";
import dynamic from "next/dynamic";

const LayoutDynamic = dynamic(() => import("@/layout"))


export default function Notes({ notes }) {
  console.log("notes data => ", notes)
  return (
    <LayoutDynamic metaTitle="Home" metaDescription="Ini Halaman Home">
      <p>Ini Halaman Notes</p>
      
    </LayoutDynamic>
  );
}

export async function getStaticProps(){
  const res = await fetch("https://paace-f178cafcae7b.nevacloud/io/api/")
  const repo = await res.json()
  return { props: { notes }}
}


