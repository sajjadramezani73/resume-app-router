import { getCurrentLocale } from '@/locales/server'
import { getCurrentScheme } from '@/utils/ThemeHandler'

import { getOneProject } from '@/service/queries'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import Title from '@/components/titlePage'
import Slider from '@/components/project/slider'

const ProjectDetail = async ({ params }: { params: Params }) => {
  const theme = await getCurrentScheme()
  const locale = getCurrentLocale()

  const projectDetail = await getOneProject(params?.id)
  console.log('projectDetail', projectDetail)

  return (
    <div className="h-full flex flex-col">
      <Title>{projectDetail?.title}</Title>

      <div className="pt-7 flex-grow overflow-hidden overflow-y-auto no-scroll">
        {/* <Suspense fallback={<ProjectsLoading />}>
      <Projects />
    </Suspense> */}
        <Slider images={projectDetail?.images} />
      </div>
    </div>
  )
}

export default ProjectDetail
