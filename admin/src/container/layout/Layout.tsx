import { Route, Routes } from 'react-router-dom'
import Splash from '../../pages/Splash'
import Dashboard from '../../pages/Dashboard'
import About from '../../pages/About'
import Educations from '../../pages/Educations'
import Experineces from '../../pages/Experineces'
import Projects from '../../pages/Projects'
import Login from '../../pages/Login'

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<About />} />
        <Route path="educations" element={<Educations />} />
        <Route path="experineces" element={<Experineces />} />
        <Route path="projects" element={<Projects />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default Layout
