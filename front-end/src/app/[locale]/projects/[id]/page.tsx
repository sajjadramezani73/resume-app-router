import { getCurrentLocale } from '@/locales/server'
import { getCurrentScheme } from '@/utils/ThemeHandler'

import { getOneProject } from '@/service/queries'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import Title from '@/components/titlePage'
import Slider from '@/components/project/slider'
import Description from '@/components/project/description'
import Skills from '@/components/project/skills'

const ProjectDetail = async ({ params }: { params: Params }) => {
  const theme = await getCurrentScheme()
  const locale = getCurrentLocale()

  const projectDetail = await getOneProject(params?.id)
  console.log('projectDetail', projectDetail)

  return (
    <div className="h-full flex flex-col">
      <Title>{projectDetail?.title}</Title>

      <div className="pt-4 flex-grow overflow-hidden overflow-y-auto no-scroll">
        {/* <Suspense fallback={<ProjectsLoading />}>
      <Projects />
    </Suspense> */}
        <p className="text-captionDark dark:text-lightCaptionLight text-tiny capitalize">
          {projectDetail?.briefDescription}
        </p>
        <div className="mt-12">
          <Slider images={projectDetail?.images} />
        </div>
        <div className="mt-12">
          <Description description={projectDetail?.description} />
        </div>
        <div className="mt-12">
          <Skills skills={projectDetail?.skills} />
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
