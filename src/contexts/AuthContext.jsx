"use client"

import { createContext, useState, useContext, useEffect } from "react"
import { authAPI } from "../services/api"

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem("token")
    const role = localStorage.getItem("role")
    const userId = localStorage.getItem("userId")

    if (token && role && userId) {
      setCurrentUser({ token, role, userId })
    }

    setLoading(false)
  }, [])

  const login = async (credentials, role) => {
    try {
      setLoading(true)
      setError(null)

      const endpoint = role === "youtuber" ? authAPI.loginAsYoutuber : authAPI.loginAsEditor
      const response = await endpoint(credentials)

      if (response.data && response.data.token) {
        localStorage.setItem("token", response.data.token)
        localStorage.setItem("role", role)
        localStorage.setItem("userId", response.data.userId)

        setCurrentUser({
          token: response.data.token,
          role,
          userId: response.data.userId,
        })

        return { success: true }
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred during login")
      return { success: false, error: err.response?.data?.message || "Login failed" }
    } finally {
      setLoading(false)
    }
  }

  const signup = async (userData, role) => {
    try {
      setLoading(true)
      setError(null)

      const endpoint = role === "youtuber" ? authAPI.signupAsYoutuber : authAPI.signupAsEditor
      const response = await endpoint(userData)

      if (response.data && response.data.token) {
        localStorage.setItem("token", response.data.token)
        localStorage.setItem("role", role)
        localStorage.setItem("userId", response.data.userId)

        setCurrentUser({
          token: response.data.token,
          role,
          userId: response.data.userId,
        })

        return { success: true }
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred during signup")
      return { success: false, error: err.response?.data?.message || "Signup failed" }
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("role")
    localStorage.removeItem("userId")
    setCurrentUser(null)
  }

  const value = {
    currentUser,
    login,
    signup,
    logout,
    loading,
    error,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
