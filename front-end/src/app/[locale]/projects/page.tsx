import Title from '@/components/titlePage'
import Projects from './Projects'
import { Suspense } from 'react'
import ProjectsLoading from './ProjectsLoading'
import { getI18n } from '@/locales/server'

const ProjectsPage = async () => {
  const t = await getI18n()
  return (
    <div className="h-full flex flex-col">
      <Title>{t('projects')}</Title>
      <div className="pt-7 flex-grow overflow-hidden overflow-y-auto no-scroll">
        <Suspense fallback={<ProjectsLoading />}>
          <Projects />
        </Suspense>
      </div>
    </div>
  )
}

export default ProjectsPage
