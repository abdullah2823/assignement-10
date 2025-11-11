import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="navbar bg-base-100 border-b-2 border-gray-400 py-2 px-4 md:px-10 mb-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <Link to={"/"}><li><a>Home</a></li></Link>
                        <Link to={"/allproduct"}><li><a>All Products</a></li></Link>
                        <Link to={"/export"}><li><a >My Exports</a></li></Link>
                        <Link to={"/import"}><li><a>My Imports</a></li></Link>
                        <Link to={"/addExport"}><li><a>Add Export</a></li></Link>
                    </ul>
                </div>
                <div className='flex items-center'>
                    <img src="/logo.png" alt="AJ Computer Logo" className="w-15 h-15 object-cover mr-4" />
                    <a className="text-3xl font-normal text-accent"><span className='text-primary font-bold'>A</span><span className='text-secondary font-bold'>J</span> Computer</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <Link to={"/"}><li><a>Home</a></li></Link>
                        <Link to={"/allproduct"}><li><a>All Products</a></li></Link>
                        <Link to={"/export"}><li><a >My Exports</a></li></Link>
                        <Link to={"/import"}><li><a>My Imports</a></li></Link>
                        <Link to={"/addExport"}><li><a>Add Export</a></li></Link>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={'/auth/login'}><a className="btn bg-secondary py-2 px-5 rounded-2xl hover:bg-primary hover:text-white">Login</a></Link>
            </div>
        </div>
    )
}
