import { useState, useEffect } from "react"
import axios from "axios"

const EditorsList = () => {
  const [editors, setEditors] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchEditors = async () => {
      try {
        const token = localStorage.getItem("token")
        const response = await axios.get("/api/editors", {
          headers: { Authorization: `Bearer ${token}` }
        })
        setEditors(response.data)
      } catch (error) {
        console.error("Error fetching editors:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchEditors()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6">Available Editors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {editors.map((editor) => (
          <div key={editor.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <img
                src={editor.profileImage || "/default-avatar.png"}
                alt={editor.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="ml-4">
                <h3 className="text-xl font-semibold">{editor.name}</h3>
                <p className="text-gray-600">{editor.specialization}</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Experience:</span>
                <span>{editor.experience} years</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Projects Completed:</span>
                <span>{editor.projectsCompleted}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Rating:</span>
                <span className="flex items-center">
                  {editor.rating} / 5
                  <span className="text-yellow-400 ml-1">★</span>
                </span>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="font-medium mb-2">Skills:</h4>
              <div className="flex flex-wrap gap-2">
                {editor.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <button className="w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              Contact Editor
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EditorsList