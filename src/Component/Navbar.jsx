import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {
        alert("Logged out successfully!");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="navbar bg-base-100 border-b-2 border-gray-400 py-2 px-4 md:px-10 mb-3">
      
      {/* Left side */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li><Link to="/">Home</Link></li>
            <li><Link to="/allproduct">All Products</Link></li>
            <li><Link to="/export">My Exports</Link></li>
            <li><Link to="/import">My Imports</Link></li>
            <li><Link to="/addExport">Add Export</Link></li>
          </ul>
        </div>
        
        <div className="flex items-center">
          <img src="/logo.png" alt="AJ Computer Logo" className="w-15 h-15 object-cover mr-4" />
          <span className="text-3xl font-normal text-accent">
            <span className="text-primary font-bold">A</span>
            <span className="text-secondary font-bold">J</span> Computer
          </span>
        </div>
      </div>

      {/* Center menu for large screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/allproduct">All Products</Link></li>
          <li><Link to="/export">My Exports</Link></li>
          <li><Link to="/import">My Imports</Link></li>
          <li><Link to="/addExport">Add Export</Link></li>
        </ul>
      </div>

      {/* Right side login/profile */}
      <div className="navbar-end">
        {!user ? (
          <Link
            to="/auth/login"
            className="btn bg-secondary py-2 px-5 rounded-2xl hover:bg-primary hover:text-white"
          >
            Login
          </Link>
        ) : (
          <div className="relative">
            <img
              src={user.photoURL || "/default-profile.png"}
              alt={user.displayName || "User"}
              className="w-10 h-10 rounded-full cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <ul className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-20">
                <li className="px-4 py-2 border-b">{user.displayName}</li>
                <li className="px-4 py-2 border-b text-gray-500">{user.email}</li>
                <li
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-red-500"
                  onClick={handleLogout}
                >
                  Logout
                </li>
              </ul>
            )}
          </div>
        )}
      </div>

    </div>
  );
}
