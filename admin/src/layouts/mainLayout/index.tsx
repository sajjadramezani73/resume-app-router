import Dashboard from '@/pages/Dashboard'
import Login from '@/pages/Login'
import Splash from '@/pages/Splash'
import AboutListPage from '@/pages/about/about-list'
import AboutPage from '@/pages/about/create-about'
import EducationPage from '@/pages/education/create-education'
import EducationListPage from '@/pages/education/education-list'
import ExperiencePage from '@/pages/experience/create-experience'
import ExperineceListPage from '@/pages/experience/experience-list'
import ProjectPage from '@/pages/project/create-project'
import ProjectListPage from '@/pages/project/project-list'
import { Route, Routes } from 'react-router-dom'

const MainLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<AboutListPage />} />
        <Route path="create-about" element={<AboutPage />} />
        <Route path="education/:id" element={<EducationPage />} />
        <Route path="create-education" element={<EducationPage />} />
        <Route path="education-list" element={<EducationListPage />} />
        <Route path="experience/:id" element={<ExperiencePage />} />
        <Route path="create-experience" element={<ExperiencePage />} />
        <Route path="experience-list" element={<ExperineceListPage />} />
        <Route path="project/:id" element={<ProjectPage />} />
        <Route path="create-project" element={<ProjectPage />} />
        <Route path="project-list" element={<ProjectListPage />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default MainLayout
