import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/screens/Homepage'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />

        {/* auth screens  */}
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </>
  )
}

export default App
