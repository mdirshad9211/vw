"use client"

import { useState, useEffect } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import axios from "axios"
import DashboardLayout from "../../components/DashboardLayout"
import Loader from "../../components/Loader"
import { useAuth } from "../../contexts/AuthContext"

// Dashboard Components
import EditorHome from "./editor/EditorHome"
import AssignedWork from "./editor/AssignedWork"
import PendingApproval from "./editor/PendingApproval"
import CompletedWork from "./editor/CompletedWork"
import YoutuberInfo from "./editor/YoutuberInfo"

const EditorDashboard = () => {
  const [editorData, setEditorData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { currentUser } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchEditorData = async () => {
      try {
        setLoading(true)
        const token = localStorage.getItem("token")

        if (!token) {
          navigate("/login")
          return
        }

        const response = await axios.get(`/api/editor/${currentUser.userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        setEditorData(response.data)
      } catch (err) {
        console.error("Error fetching editor data:", err)
        setError("Failed to load dashboard data. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    if (currentUser && currentUser.userId) {
      fetchEditorData()
    }
  }, [currentUser, navigate])

  if (loading) {
    return (
      <DashboardLayout>
        <div className="h-full flex items-center justify-center">
          <Loader />
        </div>
      </DashboardLayout>
    )
  }

  if (error) {
    return (
      <DashboardLayout>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <span className="block sm:inline">{error}</span>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<EditorHome editorData={editorData} />} />
        <Route path="/assigned-work" element={<AssignedWork />} />
        <Route path="/pending-approval" element={<PendingApproval />} />
        <Route path="/completed-work" element={<CompletedWork />} />
        <Route path="/youtuber-info" element={<YoutuberInfo />} />
      </Routes>
    </DashboardLayout>
  )
}

export default EditorDashboard
