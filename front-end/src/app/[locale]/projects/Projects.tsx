import ProjectItem from '@/components/project/projectItem'
import { getProjects } from '@/service/queries'

const Projects = async () => {
  const { projects } = await getProjects()

  return (
    <>
      {projects?.map((item: any) => {
        return <ProjectItem key={item?._id} project={item} />
      })}
    </>
  )
}

export default Projects
