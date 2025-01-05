import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/screens/Homepage'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import AuthLayout from './components/AuthLayout'
import Projects from './pages/screens/Projects'
import DashboardLayout from './components/DashboardLayout'
import Dashboard from './pages/screens/Dashboard'
import Tasks from './pages/screens/Tasks'
import Notifications from './pages/screens/Notifications'

function App() {
  return (
    <>
      <Routes>
        <Route path="/landing" element={<Homepage />} />

        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="notifications" element={<Notifications />} />

          <Route path="projects" element={<Projects />} />
        </Route>

        {/* auth screens  */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
