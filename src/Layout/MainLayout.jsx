import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Component/Navbar'
import Footer from '../Component/footer'

export default function MainLayout() {
  return (
    <div >
        <header>
            <Navbar></Navbar>
            <div className=''>
              
            </div>
           

        </header>
        <main>
            <Outlet></Outlet>
        </main>
        <footer>
            <Footer></Footer>
        </footer>
    </div>
  )
}
