import React from 'react'
import Navbar from '../Component/Navbar'
import { Outlet } from 'react-router-dom' // ✅ ঠিক করা হয়েছে
import Footer from '../Component/Footer'  // ✅ ফাইলের নাম ক্যাপিটালাইজড রাখো

export default function Authlayout() {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet /> {/* ✅ এখানে Login/Register রেন্ডার হবে */}
      </div>
      <Footer />
    </div>
  )
}
