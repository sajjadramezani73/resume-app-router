import About from '@/pages/About'
import Dashboard from '@/pages/Dashboard'
import Experineces from '@/pages/Experineces'
import Login from '@/pages/Login'
import Projects from '@/pages/Projects'
import Splash from '@/pages/Splash'
import EducationPage from '@/pages/education/create-education'
import EducationListPage from '@/pages/education/education-list'
import { Route, Routes } from 'react-router-dom'

const MainLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<About />} />
        <Route path="education/:id" element={<EducationPage />} />
        <Route path="create-education" element={<EducationPage />} />
        <Route path="education-list" element={<EducationListPage />} />
        <Route path="experineces" element={<Experineces />} />
        <Route path="projects" element={<Projects />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default MainLayout
