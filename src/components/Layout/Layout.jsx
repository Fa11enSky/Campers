import React from 'react'
import NavList from '../NavList/NavList'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
          <header><NavList /></header>
         <main> <Outlet/></main>
    </>
  )
}

export default Layout
