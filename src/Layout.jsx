import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import FooterMain from './components/Footer/FooterMain'

const Layout = () => {
  return (
    <>
        <Navbar/>
    <main>
        <Outlet></Outlet>
    </main>
      <FooterMain/>
    </>
  )
}

export default Layout