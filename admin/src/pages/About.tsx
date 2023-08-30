import { QUERY_KEY } from '@/constants/constants'
import { getAbout } from '@/services/queries'
import { useQuery } from 'react-query'

const About = () => {
  const { data, isLoading } = useQuery([QUERY_KEY.ABOUT_ME], getAbout)
  console.log('data', data, isLoading)

  return <div>About </div>
}

export default About
