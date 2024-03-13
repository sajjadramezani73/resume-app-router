import Empty from '@/components/empty'
import ProjectItem from '@/components/project/projectItem'
import { getProjects } from '@/service/queries'

const Projects = async () => {
  const { projects } = await getProjects()

  return (
    <>
      {projects.length > 0 ? (
        projects?.map((item: any) => {
          return <ProjectItem key={item?._id} project={item} />
        })
      ) : (
        <Empty />
      )}
    </>
  )
}

export default Projects
