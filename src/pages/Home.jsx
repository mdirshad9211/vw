import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <div className="bg-gradient-to-r from-red-500 to-red-700 min-h-[calc(100vh-4rem)] flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
              Connect. Collaborate. Create with Vidwize
            </h1>
            <p className="text-xl md:text-2xl text-white mb-10">The ultimate platform for YouTubers and Editors</p>
            <Link
              to="/signup"
              className="inline-block bg-white text-red-600 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transform transition hover:scale-105"
            >
              Get Started
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
