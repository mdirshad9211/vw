import { Link } from "react-router-dom"
import { FaClipboardList, FaHourglassHalf, FaCheckCircle, FaUserFriends } from "react-icons/fa"

const YoutuberHome = ({ youtuberData }) => {
  // Mock data for dashboard stats
  const stats = [
    {
      id: 1,
      name: "Pending Reviews",
      value: "5",
      icon: <FaHourglassHalf className="h-6 w-6 text-yellow-500" />,
      path: "/dashboard/youtuber/pending-review",
      color: "bg-yellow-100 dark:bg-yellow-900",
    },
    {
      id: 2,
      name: "Completed Projects",
      value: "24",
      icon: <FaCheckCircle className="h-6 w-6 text-green-500" />,
      path: "/dashboard/youtuber/completed-work",
      color: "bg-green-100 dark:bg-green-900",
    },
    {
      id: 3,
      name: "Active Editors",
      value: "8",
      icon: <FaUserFriends className="h-6 w-6 text-blue-500" />,
      path: "/dashboard/youtuber/editors-list",
      color: "bg-blue-100 dark:bg-blue-900",
    },
    {
      id: 4,
      name: "Assigned Tasks",
      value: "12",
      icon: <FaClipboardList className="h-6 w-6 text-purple-500" />,
      path: "/dashboard/youtuber/assign-work",
      color: "bg-purple-100 dark:bg-purple-900",
    },
  ]

  // Mock data for recent activities
  const recentActivities = [
    {
      id: 1,
      action: "Assigned a new video editing task",
      editor: "John Doe",
      time: "2 hours ago",
    },
    {
      id: 2,
      action: "Approved completed work",
      editor: "Jane Smith",
      time: "1 day ago",
    },
    {
      id: 3,
      action: "Requested revisions",
      editor: "Mike Johnson",
      time: "2 days ago",
    },
    {
      id: 4,
      action: "Added a new editor",
      editor: "Sarah Williams",
      time: "3 days ago",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Welcome back, {youtuberData?.name || "Creator"}!
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Here's what's happening with your projects today.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Link
            key={stat.id}
            to={stat.path}
            className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className={`flex-shrink-0 rounded-md p-3 ${stat.color}`}>{stat.icon}</div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">{stat.name}</dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900 dark:text-white">{stat.value}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Recent Activity</h3>
          </div>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {recentActivities.map((activity) => (
              <li key={activity.id} className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{activity.action}</p>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                      {activity.editor}
                    </p>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500 dark:text-gray-400">{activity.time}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Quick Actions</h3>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Link
                to="/dashboard/youtuber/assign-work"
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none"
              >
                Assign New Work
              </Link>
              <Link
                to="/dashboard/youtuber/editors-list"
                className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none"
              >
                Find Editors
              </Link>
              <Link
                to="/dashboard/youtuber/pending-review"
                className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none"
              >
                Review Submissions
              </Link>
              <Link
                to="/dashboard/youtuber/recommendations"
                className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none"
              >
                View Recommendations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default YoutuberHome
