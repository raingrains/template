import React from 'react'
// import { useLocation, useParams, useSearchParams } from 'react-router-dom'

export default function About() {
  const [searchParams] = useSearchParams()
  console.log(useLocation(), useParams(), useSearchParams())
  console.log(searchParams.get('test'), searchParams.get('hello'))
  return (
    <>
      <h1>About</h1>
    </>
  )
}
