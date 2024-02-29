import React, { useEffect } from 'react'
import Layout from '@/layout'

export default function Users() {
  useEffect(()=>{
    fetch("/api/hello")
    .then(res=>res.json())
    .then((res)=>console.log("response=>", res))
    .catch((err)=>console.log("err =>",err))
  })
  return (
    <Layout metaTitle="users">
      <p>Users</p>
    </Layout>
  )
}
