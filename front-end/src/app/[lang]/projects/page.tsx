import Title from '@/components/titlePage'
import { getDictionary } from '@/i18n/get-dictionary'
import { Locale } from '@/i18n/i18n-config'
import Projects from './Projects'
import { Suspense } from 'react'
import ProjectsLoading from './ProjectsLoading'

const ProjectsPage = async ({
  params: { lang },
}: {
  params: { lang: Locale }
}) => {
  const dictionary = await getDictionary(lang)
  return (
    <div className="h-full flex flex-col">
      <Title>{dictionary.projects}</Title>
      <div className="pt-7 flex-grow overflow-hidden overflow-y-auto no-scroll">
        <Suspense fallback={<ProjectsLoading />}>
          <Projects language={lang} />
        </Suspense>
      </div>
    </div>
  )
}

export default ProjectsPage
