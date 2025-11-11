import React from 'react'
import Navbar from '../Component/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Component/footer'

export default function Authlayout() {
  return (
    <div>
        <Navbar></Navbar>
        <div>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
  )
}

