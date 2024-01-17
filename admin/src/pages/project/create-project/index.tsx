import { Keys } from '@/constants/Keys'
import { Paths } from '@/constants/Paths'
import CreateProject from '@/container/projects/create-project'
import { useRequest } from '@/services/axios/useRequest'
import { useProjectActions } from '@/store/projectSlice'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

const ProjectPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { updateEditProject } = useProjectActions()

  useRequest({
    queryKey: Keys.project.projectOne,
    url: `${Paths.project.base}/${id}`,
    enabled: !!id,
    refetchOnWindowFocus: false,
    successCallback(data) {
      console.log('sss', data)

      const { title, briefDescription, description, links, skills } =
        data.project

      dispatch(
        updateEditProject({
          title,
          briefDescription,
          description,
          links,
          skills,
        })
      )
    },
  })

  return <CreateProject mode={id ? 'edit' : 'create'} />
}

export default ProjectPage
