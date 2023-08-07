import ProjectItem from '@/components/projectItem'
import { getProjects } from '@/service/queries'

const Projects = async () => {
  const { projects } = await getProjects()

  return (
    <>
      {projects?.reverse().map((item: any) => {
        return <ProjectItem key={item?._id} project={item} />
      })}
    </>
  )
}

export default Projects
