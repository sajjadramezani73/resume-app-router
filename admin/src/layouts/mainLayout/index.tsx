import About from '@/pages/About'
import Dashboard from '@/pages/Dashboard'
// import Experineces from '@/pages/Experineces'
import Login from '@/pages/Login'
import Projects from '@/pages/Projects'
import Splash from '@/pages/Splash'
import EducationPage from '@/pages/education/create-education'
import EducationListPage from '@/pages/education/education-list'
import ExperiencePage from '@/pages/experience/create-experience'
import ExperineceListPage from '@/pages/experience/experience-list'
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
        <Route path="experience/:id" element={<ExperiencePage />} />
        <Route path="create-experience" element={<ExperiencePage />} />
        <Route path="experience-list" element={<ExperineceListPage />} />
        <Route path="projects" element={<Projects />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default MainLayout
