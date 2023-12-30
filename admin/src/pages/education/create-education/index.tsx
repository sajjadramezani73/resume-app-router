import CreateEducation from '@/container/educations/create-education'
import { useParams } from 'react-router-dom'

const EducationPage = () => {
  const { id } = useParams()
  return <CreateEducation mode={id ? 'edit' : 'create'} />
}

export default EducationPage
