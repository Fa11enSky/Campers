import React from 'react'
import NavList from '../NavList/NavList'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
          <header><NavList /></header>
          <Outlet/>
    </div>
  )
}

export default Layout
