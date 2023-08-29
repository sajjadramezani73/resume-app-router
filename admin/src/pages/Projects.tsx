import { useQuery } from 'react-query'
import { getProjects } from '../services/queries'
import { QUERY_KEY } from '../constants/constants'

const Projects = () => {
  const { data, isLoading } = useQuery([QUERY_KEY.PROJECTS], getProjects)
  console.log('data', data, isLoading)
  return <div>Projects</div>
}

export default Projects
