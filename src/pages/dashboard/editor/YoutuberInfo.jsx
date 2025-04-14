import { useState, useEffect } from "react"
import axios from "axios"

const YoutuberInfo = () => {
  const [youtubers, setYoutubers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchYoutubers = async () => {
      try {
        const token = localStorage.getItem("token")
        const response = await axios.get("/api/youtubers", {
          headers: { Authorization: `Bearer ${token}` }
        })
        setYoutubers(response.data)
      } catch (error) {
        console.error("Error fetching youtubers:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchYoutubers()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Youtuber Information</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {youtubers.map((youtuber) => (
          <div key={youtuber.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img
                src={youtuber.profileImage || "/default-avatar.png"}
                alt={youtuber.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="font-semibold text-lg">{youtuber.name}</h3>
                <p className="text-gray-600">{youtuber.channelName}</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm">
                <span className="font-medium">Subscribers:</span> {youtuber.subscribers}
              </p>
              <p className="text-sm">
                <span className="font-medium">Content Type:</span> {youtuber.contentType}
              </p>
              <p className="text-sm">
                <span className="font-medium">Upload Frequency:</span> {youtuber.uploadFrequency}
              </p>
              <p className="text-sm">
                <span className="font-medium">Status:</span>{" "}
                <span className={`${youtuber.isActive ? "text-green-600" : "text-red-600"}`}>
                  {youtuber.isActive ? "Active" : "Inactive"}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default YoutuberInfo