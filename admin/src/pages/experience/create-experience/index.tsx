import CreateExperience from '@/container/experiences/create-experience'
import { useParams } from 'react-router-dom'

const ExperiencePage = () => {
  const { id } = useParams()
  return <CreateExperience mode={id ? 'edit' : 'create'} />
}

export default ExperiencePage
