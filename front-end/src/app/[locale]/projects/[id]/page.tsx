import { getCurrentLocale } from '@/locales/server'
import { getCurrentScheme } from '@/utils/ThemeHandler'

import { getOneProject } from '@/service/queries'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import Title from '@/components/titlePage'
import Slider from '@/components/project/slider'
import Description from '@/components/project/description'

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
        <div className="mt-12">
          <Description description={projectDetail?.description} />
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
