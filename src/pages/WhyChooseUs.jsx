import Navbar from "../components/Navbar"
import { FaCheckCircle, FaUserFriends, FaShieldAlt, FaMoneyBillWave, FaChartLine, FaTools } from "react-icons/fa"

const WhyChooseUs = () => {
  const youtuberBenefits = [
    {
      icon: <FaUserFriends className="h-6 w-6 text-red-600" />,
      title: "Access to Vetted Talent",
      description: "Connect with pre-screened, professional editors who have proven their skills and reliability.",
    },
    {
      icon: <FaMoneyBillWave className="h-6 w-6 text-red-600" />,
      title: "Transparent Pricing",
      description: "Clear, upfront pricing with no hidden fees. Pay only for the services you need.",
    },
    {
      icon: <FaShieldAlt className="h-6 w-6 text-red-600" />,
      title: "Secure Collaboration",
      description:
        "Our platform ensures your content and intellectual property are protected throughout the editing process.",
    },
    {
      icon: <FaChartLine className="h-6 w-6 text-red-600" />,
      title: "Scale Your Content",
      description: "Easily scale your content production by working with multiple editors for different projects.",
    },
  ]

  const editorBenefits = [
    {
      icon: <FaCheckCircle className="h-6 w-6 text-red-600" />,
      title: "Consistent Work",
      description: "Access a steady stream of projects that match your skills and interests.",
    },
    {
      icon: <FaMoneyBillWave className="h-6 w-6 text-red-600" />,
      title: "Fair Compensation",
      description: "Set your own rates and receive payment promptly for completed work.",
    },
    {
      icon: <FaTools className="h-6 w-6 text-red-600" />,
      title: "Showcase Your Skills",
      description: "Build a portfolio of your work and receive reviews that help you stand out to potential clients.",
    },
    {
      icon: <FaUserFriends className="h-6 w-6 text-red-600" />,
      title: "Build Relationships",
      description: "Develop long-term relationships with content creators who value your expertise.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Navbar />

      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              Why Choose Vidwize
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-400">
              The ultimate platform for YouTubers and Editors to collaborate
            </p>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center">For YouTubers</h2>
            <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {youtuberBenefits.map((benefit, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-100 dark:bg-red-900 mx-auto">
                      {benefit.icon}
                    </div>
                    <div className="mt-5 text-center">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">{benefit.title}</h3>
                      <p className="mt-2 text-base text-gray-500 dark:text-gray-400">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center">For Editors</h2>
            <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {editorBenefits.map((benefit, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-100 dark:bg-red-900 mx-auto">
                      {benefit.icon}
                    </div>
                    <div className="mt-5 text-center">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">{benefit.title}</h3>
                      <p className="mt-2 text-base text-gray-500 dark:text-gray-400">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 bg-red-600 rounded-lg shadow-xl overflow-hidden">
            <div className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16 text-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Ready to transform your content creation process?
              </h2>
              <p className="mt-4 text-lg leading-6 text-red-100">Join Vidwize today and experience the difference.</p>
              <div className="mt-8 flex justify-center">
                <div className="inline-flex rounded-md shadow">
                  <a
                    href="/signup"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-red-50"
                  >
                    Get Started
                  </a>
                </div>
                <div className="ml-3 inline-flex">
                  <a
                    href="/plans"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-800 hover:bg-red-900"
                  >
                    View Plans
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default WhyChooseUs
