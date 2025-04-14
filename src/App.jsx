import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { ThemeProvider } from "./contexts/ThemeContext"
import { AuthProvider } from "./contexts/AuthContext"

// Pages
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import About from "./pages/About"
import WhyChooseUs from "./pages/WhyChooseUs"
import FAQs from "./pages/FAQs"
import Plans from "./pages/Plans"
import YoutuberDashboard from "./pages/dashboard/YoutuberDashboard"
import EditorDashboard from "./pages/dashboard/EditorDashboard"
import NotFound from "./pages/NotFound"

// Protected Route Component
const ProtectedRoute = ({ children, allowedRole }) => {
  const token = localStorage.getItem("token")
  const userRole = localStorage.getItem("role")

  if (!token) {
    return <Navigate to="/login" replace />
  }

  if (allowedRole && userRole !== allowedRole) {
    return <Navigate to="/" replace />
  }

  return children
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/plans" element={<Plans />} />

            {/* Protected Routes */}
            <Route
              path="/dashboard/youtuber/*"
              element={
                <ProtectedRoute allowedRole="youtuber">
                  <YoutuberDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/dashboard/editor/*"
              element={
                <ProtectedRoute allowedRole="editor">
                  <EditorDashboard />
                </ProtectedRoute>
              }
            />

            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
