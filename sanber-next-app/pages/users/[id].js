import React from 'react'
import { useRouter } from 'next/router'

export default function useName() {
  const router=useRouter()
  const { id }=router?.query
  return (
    <div>User By Name {id}</div>
  )
}
