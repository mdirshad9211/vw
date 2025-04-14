import { useState, useEffect } from "react"
import axios from "axios"

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const token = localStorage.getItem("token")
        const response = await axios.get("/api/recommendations", {
          headers: { Authorization: `Bearer ${token}` }
        })
        setRecommendations(response.data)
      } catch (error) {
        console.error("Error fetching recommendations:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchRecommendations()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6">Recommended for You</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendations.map((recommendation) => (
          <div key={recommendation.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">{recommendation.title}</h3>
              <span className={`px-3 py-1 rounded-full text-sm ${
                recommendation.priority === 'high' 
                  ? 'bg-red-100 text-red-800'
                  : recommendation.priority === 'medium'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-green-100 text-green-800'
              }`}>
                {recommendation.priority}
              </span>
            </div>
            <p className="text-gray-600 mb-4">{recommendation.description}</p>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="text-gray-600 mr-2">Category:</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {recommendation.category}
                </span>
              </div>
              {recommendation.estimatedImpact && (
                <div className="flex items-center">
                  <span className="text-gray-600 mr-2">Estimated Impact:</span>
                  <span className="font-medium">{recommendation.estimatedImpact}</span>
                </div>
              )}
              {recommendation.implementationTime && (
                <div className="flex items-center">
                  <span className="text-gray-600 mr-2">Implementation Time:</span>
                  <span className="font-medium">{recommendation.implementationTime}</span>
                </div>
              )}
            </div>
            <div className="mt-6 flex space-x-3">
              <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Implement
              </button>
              <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                Save for Later
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Recommendations