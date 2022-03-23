import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  return (
    <>
      <h1>这是首页</h1>
      <button
        onClick={() => {
          navigate('/about/1?test=2&hello=world', {
            state: {
              test: 1,
            },
          })
        }}
      >
        跳转到about页面
      </button>
    </>
  )
}
