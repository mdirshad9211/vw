"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import { useAuth } from "../../../contexts/AuthContext"
import Loader from "../../../components/Loader"

const AssignWork = () => {
  const [editors, setEditors] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    deadline: "",
    editorId: "",
    instructions: "",
  })
  const [formError, setFormError] = useState("")
  const [success, setSuccess] = useState("")
  const { currentUser } = useAuth()

  useEffect(() => {
    const fetchEditors = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`/api/youtuber/getEditor/${currentUser.userId}`)
        setEditors(response.data)
      } catch (err) {
        console.error("Error fetching editors:", err)
        setError("Failed to load editors. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchEditors()
  }, [currentUser.userId])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormError("")
    setSuccess("")

    // Validate form
    if (!formData.title || !formData.description || !formData.deadline || !formData.editorId) {
      setFormError("Please fill in all required fields")
      return
    }

    try {
      setLoading(true)
      await axios.post(`/api/youtuber/assign_work/${currentUser.userId}`, formData)
      setSuccess("Work assigned successfully!")
      // Reset form
      setFormData({
        title: "",
        description: "",
        deadline: "",
        editorId: "",
        instructions: "",
      })
    } catch (err) {
      console.error("Error assigning work:", err)
      setFormError(err.response?.data?.message || "Failed to assign work. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  if (loading && editors.length === 0) {
    return <Loader />
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <span className="block sm:inline">{error}</span>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Assign Work</h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Create a new assignment for an editor</p>
      </div>

      {formError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <span className="block sm:inline">{formError}</span>
        </div>
      )}

      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <span className="block sm:inline">{success}</span>
        </div>
      )}

      <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Project Title *
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={formData.title}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm dark:bg-gray-700 dark:text-white"
                placeholder="Enter project title"
                required
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Project Description *
              </label>
              <textarea
                name="description"
                id="description"
                rows="4"
                value={formData.description}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm dark:bg-gray-700 dark:text-white"
                placeholder="Describe what needs to be done"
                required
              ></textarea>
            </div>

            <div>
              <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Deadline *
              </label>
              <input
                type="date"
                name="deadline"
                id="deadline"
                value={formData.deadline}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm dark:bg-gray-700 dark:text-white"
                required
              />
            </div>

            <div>
              <label htmlFor="editorId" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Select Editor *
              </label>
              <select
                name="editorId"
                id="editorId"
                value={formData.editorId}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm dark:bg-gray-700 dark:text-white"
                required
              >
                <option value="">Select an editor</option>
                {editors.map((editor) => (
                  <option key={editor.id} value={editor.id}>
                    {editor.name} - {editor.specialization}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="instructions" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Additional Instructions
              </label>
              <textarea
                name="instructions"
                id="instructions"
                rows="3"
                value={formData.instructions}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm dark:bg-gray-700 dark:text-white"
                placeholder="Any specific requirements or notes"
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                {loading ? <Loader /> : "Assign Work"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AssignWork
