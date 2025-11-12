import React from 'react'
import { Outlet } from 'react-router-dom' // ✅ ঠিক করা হয়েছে
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer' // ✅ "footer" নয়, ফাইলের নাম যদি "Footer.jsx" হয় তাহলে ক্যাপিটাল লিখো

export default function MainLayout() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet /> {/* ✅ child route এখানে render হবে */}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
