import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import { FaCheck, FaTimes } from "react-icons/fa"

const Plans = () => {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      description: "Perfect for getting started",
      features: [
        { text: "Basic profile", included: true },
        { text: "Up to 3 active projects", included: true },
        { text: "Standard support", included: true },
        { text: "Basic analytics", included: true },
        { text: "Priority matching", included: false },
        { text: "Custom branding", included: false },
        { text: "Advanced analytics", included: false },
        { text: "Dedicated support", included: false },
      ],
      buttonText: "Get Started",
      buttonClass:
        "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600",
    },
    {
      name: "Pro",
      price: "$19.99",
      period: "per month",
      description: "Best for growing creators",
      features: [
        { text: "Enhanced profile", included: true },
        { text: "Up to 10 active projects", included: true },
        { text: "Priority support", included: true },
        { text: "Advanced analytics", included: true },
        { text: "Priority matching", included: true },
        { text: "Custom branding", included: false },
        { text: "Team collaboration", included: false },
        { text: "Dedicated account manager", included: false },
      ],
      buttonText: "Upgrade to Pro",
      buttonClass: "bg-red-600 text-white hover:bg-red-700",
    },
    {
      name: "Elite",
      price: "$49.99",
      period: "per month",
      description: "For professional content creators",
      features: [
        { text: "Premium profile", included: true },
        { text: "Unlimited active projects", included: true },
        { text: "Priority support", included: true },
        { text: "Comprehensive analytics", included: true },
        { text: "Priority matching", included: true },
        { text: "Custom branding", included: true },
        { text: "Team collaboration", included: true },
        { text: "Dedicated account manager", included: true },
      ],
      buttonText: "Upgrade to Elite",
      buttonClass: "bg-gradient-to-r from-red-600 to-red-800 text-white hover:from-red-700 hover:to-red-900",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Navbar />

      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              Membership Plans
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-400">
              Choose the perfect plan for your needs
            </p>
          </div>

          <div className="mt-12 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="relative p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm flex flex-col"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{plan.name}</h3>

                  <div className="mt-4 flex items-baseline text-gray-900 dark:text-white">
                    <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                    {plan.period && <span className="ml-1 text-xl font-semibold">{plan.period}</span>}
                  </div>

                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400">{plan.description}</p>

                  <ul className="mt-6 space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="flex-shrink-0">
                          {feature.included ? (
                            <FaCheck className="h-5 w-5 text-green-500" />
                          ) : (
                            <FaTimes className="h-5 w-5 text-gray-400" />
                          )}
                        </div>
                        <p
                          className={`ml-3 text-base ${feature.included ? "text-gray-700 dark:text-gray-300" : "text-gray-500 dark:text-gray-500"}`}
                        >
                          {feature.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <Link
                    to="/signup"
                    className={`w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md ${plan.buttonClass}`}
                  >
                    {plan.buttonText}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Need a custom plan?</h3>
              <div className="mt-2 max-w-xl text-sm text-gray-500 dark:text-gray-400">
                <p>
                  We offer custom plans for large content creators and editing teams. Contact us to discuss your
                  specific needs.
                </p>
              </div>
              <div className="mt-5">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none"
                >
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Plans
