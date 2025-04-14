"use client"

import { useState, useEffect } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import axios from "axios"
import DashboardLayout from "../../components/DashboardLayout"
import Loader from "../../components/Loader"
import { useAuth } from "../../contexts/AuthContext"

// Dashboard Components
import YoutuberHome from "./youtuber/YoutuberHome"
import AssignWork from "./youtuber/AssignWork"
import PendingReview from "./youtuber/PendingReview"
import CompletedWork from "./youtuber/CompletedWork"
import EditorsList from "./youtuber/EditorsList"
import Recommendations from "./youtuber/Recommendations"


const YoutuberDashboard = () => {
  const [youtuberData, setYoutuberData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { currentUser } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchYoutuberData = async () => {
      try {
        setLoading(true)
        const token = localStorage.getItem("token")

        if (!token) {
          navigate("/login")
          return
        }

        const response = await axios.get(`/api/youtuber/${currentUser.userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        setYoutuberData(response.data)
      } catch (err) {
        console.error("Error fetching youtuber data:", err)
        setError("Failed to load dashboard data. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    if (currentUser && currentUser.userId) {
      fetchYoutuberData()
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
        <Route path="/" element={<YoutuberHome youtuberData={youtuberData} />} />
        <Route path="/assign-work" element={<AssignWork />} />
        <Route path="/pending-review" element={<PendingReview />} />
        <Route path="/completed-work" element={<CompletedWork />} />
        <Route path="/editors-list" element={<EditorsList />} />
        <Route path="/recommendations" element={<Recommendations />} />
      </Routes>
    </DashboardLayout>
  )
}

export default YoutuberDashboard
