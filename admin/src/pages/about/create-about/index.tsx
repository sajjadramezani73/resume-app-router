import { Keys } from '@/constants/Keys'
import { Paths } from '@/constants/Paths'
import CreateAbout from '@/container/about/create-about'
import { useRequest } from '@/services/axios/useRequest'
import { useAboutActions } from '@/store/aboutSlice'
import { useDispatch } from 'react-redux'

const AboutPage = () => {
  const dispatch = useDispatch()
  const { updateEditAbout } = useAboutActions()

  useRequest({
    queryKey: Keys.about.about,
    url: Paths.about.all,
    refetchOnWindowFocus: false,
    successCallback(data) {
      dispatch(updateEditAbout(data?.aboutMe))
    },
  })

  return <CreateAbout />
}

export default AboutPage
