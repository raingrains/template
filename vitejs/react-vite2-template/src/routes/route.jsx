import React, { lazy, Suspense } from 'react'
import { useRoutes, Link } from 'react-router-dom'
// import Home from '../views/home'
// import About from '../views/about'
// import Mine from '../views/mine'
// lazy 路由懒加载
const Home = lazy(() => import('../views/home/Index.jsx'))
const About = lazy(() => import('../views/about/Index.jsx'))
const Mine = lazy(() => import('../views/mine/Index.jsx'))

export default function ReactRoute() {
  const element = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about/:id',
      element: <About />,
    },
    {
      path: '/mine',
      element: <Mine />,
    },
  ])
  return (
    <div>
      <Link to="/">home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/about">about</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/mine">mine</Link>
      <Suspense fallback={<div>loading...</div>}>{element}</Suspense>
    </div>
  )
}
