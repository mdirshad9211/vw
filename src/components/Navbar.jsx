"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa"
import { useAuth } from "../contexts/AuthContext"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/")
    setDropdownOpen(false)
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-red-600 font-bold text-xl">Vidwize</span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link
              to="/"
              className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </Link>
            <Link
              to="/why-choose-us"
              className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Why Choose Us
            </Link>
            <Link
              to="/faqs"
              className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              FAQs
            </Link>
            <Link
              to="/plans"
              className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Plans
            </Link>

            {currentUser ? (
              <div className="relative ml-3">
                <div>
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 focus:outline-none"
                  >
                    <FaUserCircle className="h-6 w-6 mr-1" />
                    <span>Profile</span>
                  </button>
                </div>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1">
                    <Link
                      to={`/dashboard/${currentUser.role}`}
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex space-x-2">
                <Link
                  to="/login"
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 focus:outline-none"
            >
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/why-choose-us"
              className="block text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Why Choose Us
            </Link>
            <Link
              to="/faqs"
              className="block text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              FAQs
            </Link>
            <Link
              to="/plans"
              className="block text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Plans
            </Link>

            {currentUser ? (
              <>
                <Link
                  to={`/dashboard/${currentUser.role}`}
                  className="block text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    handleLogout()
                    setIsOpen(false)
                  }}
                  className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 px-3 py-2 rounded-md text-base font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="flex flex-col space-y-2 px-3 py-2">
                <Link
                  to="/login"
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-4 py-2 rounded-md text-sm font-medium text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
