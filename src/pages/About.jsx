import Navbar from "../components/Navbar"
import { FaHandshake, FaLightbulb, FaRocket } from "react-icons/fa"

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Navbar />

      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              About Vidwize
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-400">
              Connecting talented video editors with content creators
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  Vidwize is a revolutionary platform designed to bridge the gap between content creators and video
                  editors. We understand the challenges that YouTubers face in finding reliable, skilled editors who can
                  bring their vision to life, as well as the difficulties that editors encounter in finding consistent
                  work that matches their skills and interests.
                </p>

                <p>
                  Our mission is to create a seamless, efficient marketplace where YouTubers can find the perfect editor
                  for their content, and where editors can showcase their skills and connect with creators who value
                  their work.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 flex items-center">
                  <FaLightbulb className="mr-2 text-red-600" /> Our Vision
                </h2>

                <p>
                  We envision a world where content creation is more accessible, efficient, and collaborative. By
                  removing the barriers between creators and editors, we aim to elevate the quality of content across
                  the platform, allowing creators to focus on what they do best - creating engaging concepts and
                  connecting with their audience.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 flex items-center">
                  <FaHandshake className="mr-2 text-red-600" /> How It Works
                </h2>

                <p>Vidwize operates on a simple yet powerful concept:</p>

                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>
                    <strong>For YouTubers:</strong> Create an account, browse through our pool of talented editors,
                    review their portfolios, and assign projects directly through our platform. Track progress, provide
                    feedback, and approve the final product - all in one place.
                  </li>
                  <li>
                    <strong>For Editors:</strong> Showcase your skills, set your rates, and connect with YouTubers
                    looking for your specific expertise. Receive clear briefs, submit your work, and build long-term
                    relationships with creators who value your craft.
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 flex items-center">
                  <FaRocket className="mr-2 text-red-600" /> Our Commitment
                </h2>

                <p>At Vidwize, we are committed to:</p>

                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>
                    <strong>Quality:</strong> We maintain high standards for both creators and editors on our platform.
                  </li>
                  <li>
                    <strong>Fairness:</strong> We ensure fair compensation for editors and value for money for creators.
                  </li>
                  <li>
                    <strong>Innovation:</strong> We continuously improve our platform based on user feedback and
                    industry trends.
                  </li>
                  <li>
                    <strong>Community:</strong> We foster a supportive community where knowledge sharing and
                    collaboration thrive.
                  </li>
                </ul>

                <p className="mt-8">
                  Join us on this journey to revolutionize content creation and editing. Whether you're a YouTuber
                  looking to elevate your content or an editor seeking to showcase your skills, Vidwize is the platform
                  for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default About
