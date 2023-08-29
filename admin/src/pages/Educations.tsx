import { useQuery } from 'react-query'
import { QUERY_KEY } from '../constants/constants'
import { getEducations } from '../services/queries'

const Educations = () => {
  const { data, isLoading } = useQuery([QUERY_KEY.EDUCATIONS], getEducations)
  console.log('data', data, isLoading)
  return <div>Educations</div>
}

export default Educations
