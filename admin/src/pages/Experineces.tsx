import { QUERY_KEY } from '@/constants/constants'
import { getExperiences } from '@/services/queries'
import { useQuery } from 'react-query'

const Experineces = () => {
  const { data, isLoading } = useQuery([QUERY_KEY.EXPERIENCES], getExperiences)
  console.log('data', data, isLoading)
  return <div>Experineces</div>
}

export default Experineces
