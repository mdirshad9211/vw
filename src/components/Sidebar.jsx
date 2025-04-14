"use client"
import { Link, useLocation } from "react-router-dom"
import {
  FaHome,
  FaClipboardList,
  FaCheckCircle,
  FaUserFriends,
  FaLightbulb,
  FaTasks,
  FaHourglassHalf,
  FaUser,
  FaMoon,
  FaSun,
} from "react-icons/fa"
import { useTheme } from "../contexts/ThemeContext"
import { useAuth } from "../contexts/AuthContext"

const Sidebar = () => {
  const { darkMode, toggleTheme } = useTheme()
  const { currentUser } = useAuth()
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname.includes(path)
  }

  const youtuberLinks = [
    { path: "/dashboard/youtuber/assign-work", name: "Assign Work", icon: <FaClipboardList /> },
    { path: "/dashboard/youtuber/pending-review", name: "Pending Review", icon: <FaHourglassHalf /> },
    { path: "/dashboard/youtuber/completed-work", name: "Completed Work", icon: <FaCheckCircle /> },
    { path: "/dashboard/youtuber/editors-list", name: "Editors List", icon: <FaUserFriends /> },
    { path: "/dashboard/youtuber/recommendations", name: "Recommendations", icon: <FaLightbulb /> },
  ]

  const editorLinks = [
    { path: "/dashboard/editor/assigned-work", name: "Assigned Work", icon: <FaTasks /> },
    { path: "/dashboard/editor/pending-approval", name: "Pending Approval", icon: <FaHourglassHalf /> },
    { path: "/dashboard/editor/completed-work", name: "Completed Work", icon: <FaCheckCircle /> },
    { path: "/dashboard/editor/youtuber-info", name: "Youtuber Info", icon: <FaUser /> },
  ]

  const links = currentUser?.role === "youtuber" ? youtuberLinks : editorLinks

  return (
    <div className="h-screen w-64 bg-white dark:bg-gray-900 shadow-lg fixed left-0 top-0 overflow-y-auto">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <Link to="/" className="flex items-center justify-center">
          <span className="text-red-600 font-bold text-2xl">Vidwize</span>
        </Link>
      </div>

      <div className="p-4">
        <Link
          to={`/dashboard/${currentUser?.role}`}
          className={`flex items-center p-2 rounded-md ${
            location.pathname === `/dashboard/${currentUser?.role}`
              ? "bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300"
              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          }`}
        >
          <FaHome className="mr-3" />
          <span>Dashboard</span>
        </Link>

        <div className="mt-6">
          <h3 className="text-xs uppercase font-semibold text-gray-500 dark:text-gray-400 tracking-wider">Menu</h3>

          <div className="mt-3 space-y-1">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center p-2 rounded-md ${
                  isActive(link.path)
                    ? "bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                <span className="mr-3">{link.icon}</span>
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full p-4 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={toggleTheme}
          className="flex items-center justify-between w-full p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <span className="flex items-center">
            {darkMode ? <FaSun className="mr-3" /> : <FaMoon className="mr-3" />}
            <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
          </span>
        </button>
      </div>
    </div>
  )
}

export default Sidebar
