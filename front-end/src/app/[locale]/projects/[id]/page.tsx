import { getOneProject } from '@/service/queries'
import Title from '@/components/titlePage'
import Slider from '@/components/project/slider'
import Description from '@/components/project/description'
import Skills from '@/components/project/skills'
import Links from '@/components/project/links'

const ProjectDetail = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params
  const projectDetail = await getOneProject(id)

  return (
    <div className="h-full flex flex-col">
      <Title>{projectDetail?.title}</Title>

      <div className="pt-4 flex-grow overflow-hidden overflow-y-auto no-scroll">
        {/* <Suspense fallback={<p>loading...</p>}> */}
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
        <div className="mt-12">
          <Links links={projectDetail?.links} />
        </div>
        {/* </Suspense> */}
      </div>
    </div>
  )
}

export default ProjectDetail
