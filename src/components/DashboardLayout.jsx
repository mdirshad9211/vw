"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import { useAuth } from "../contexts/AuthContext"

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const { currentUser } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    // Check if user is authenticated
    if (!currentUser) {
      navigate("/login")
    }
  }, [currentUser, navigate])

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-800">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? "block" : "hidden"} md:block`}>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-800 p-6 md:ml-64">
          {children}
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
