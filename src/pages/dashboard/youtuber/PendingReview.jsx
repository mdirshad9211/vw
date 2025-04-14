"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import { useAuth } from "../../../contexts/AuthContext"
import Loader from "../../../components/Loader"
import { FaCheckCircle, FaTimesCircle, FaEye } from "react-icons/fa"

const PendingReview = () => {
  const [pendingWorks, setPendingWorks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedWork, setSelectedWork] = useState(null)
  const [feedback, setFeedback] = useState("")
  const [actionLoading, setActionLoading] = useState(false)
  const [success, setSuccess] = useState("")
  const { currentUser } = useAuth()

  useEffect(() => {
    const fetchPendingWorks = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`/api/youtuber/pending_review/${currentUser.userId}`)
        setPendingWorks(response.data)
      } catch (err) {
        console.error("Error fetching pending works:", err)
        setError("Failed to load pending reviews. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchPendingWorks()
  }, [currentUser.userId])

  const handleViewDetails = (work) => {
    setSelectedWork(work)
    setFeedback("")
  }

  const handleCloseDetails = () => {
    setSelectedWork(null)
    setFeedback("")
  }

  const handleApprove = async () => {
    try {
      setActionLoading(true)
      await axios.put(`/api/youtuber/review_approve/${selectedWork.id}`, { feedback })
      setPendingWorks(pendingWorks.filter((work) => work.id !== selectedWork.id))
      setSuccess("Work approved successfully!")
      setSelectedWork(null)
    } catch (err) {
      console.error("Error approving work:", err)
      setError(err.response?.data?.message || "Failed to approve work. Please try again.")
    } finally {
      setActionLoading(false)
    }
  }

  const handleReject = async () => {
    if (!feedback) {
      setError("Please provide feedback for rejection")
      return
    }

    try {
      setActionLoading(true)
      await axios.put(`/api/youtuber/review_reject/${selectedWork.id}`, { feedback })
      setPendingWorks(pendingWorks.filter((work) => work.id !== selectedWork.id))
      setSuccess("Work rejected and sent back for revisions")
      setSelectedWork(null)
    } catch (err) {
      console.error("Error rejecting work:", err)
      setError(err.response?.data?.message || "Failed to reject work. Please try again.")
    } finally {
      setActionLoading(false)
    }
  }

  if (loading) {
    return <Loader />
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Pending Reviews</h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Review and approve submitted work from editors</p>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <span className="block sm:inline">{success}</span>
        </div>
      )}

      {pendingWorks.length === 0 ? (
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 text-center">
          <p className="text-gray-500 dark:text-gray-400">No pending reviews at the moment</p>
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  Project
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  Editor
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  Submitted
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {pendingWorks.map((work) => (
                <tr key={work.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{work.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500 dark:text-gray-400">{work.editorName}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(work.submittedAt).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200">
                      Pending Review
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleViewDetails(work)}
                      className="text-red-600 hover:text-red-900 dark:hover:text-red-400"
                    >
                      <FaEye className="inline mr-1" /> Review
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal for reviewing work */}
      {selectedWork && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Review Submission</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">{selectedWork.title}</p>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Project Description</h4>
                  <p className="mt-1 text-sm text-gray-900 dark:text-white">{selectedWork.description}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Editor's Notes</h4>
                  <p className="mt-1 text-sm text-gray-900 dark:text-white">
                    {selectedWork.editorNotes || "No notes provided"}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Submitted Work</h4>
                  <div className="mt-2 border border-gray-200 dark:border-gray-700 rounded-md p-4">
                    <a
                      href={selectedWork.submissionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:text-red-500"
                    >
                      View Submitted Work
                    </a>
                  </div>
                </div>

                <div>
                  <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Feedback
                  </label>
                  <textarea
                    id="feedback"
                    name="feedback"
                    rows="4"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm dark:bg-gray-700 dark:text-white"
                    placeholder="Provide feedback on the submission"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 sm:px-6 flex flex-col sm:flex-row-reverse gap-2 border-t border-gray-200 dark:border-gray-700">
              <button
                type="button"
                onClick={handleApprove}
                disabled={actionLoading}
                className="inline-flex justify-center items-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <FaCheckCircle className="mr-2" /> Approve
              </button>
              <button
                type="button"
                onClick={handleReject}
                disabled={actionLoading}
                className="inline-flex justify-center items-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                <FaTimesCircle className="mr-2" /> Request Revisions
              </button>
              <button
                type="button"
                onClick={handleCloseDetails}
                disabled={actionLoading}
                className="inline-flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PendingReview
