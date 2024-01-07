import { Keys } from '@/constants/Keys'
import { Paths } from '@/constants/Paths'
import CreateExperience from '@/container/experiences/create-experience'
import { useRequest } from '@/services/axios/useRequest'
import { useExperienceActions } from '@/store/experienceSlice'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

const ExperiencePage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { updateEditExperience } = useExperienceActions()

  useRequest({
    queryKey: Keys.experience.experienceOne,
    url: `${Paths.experience.base}/${id}`,
    enabled: !!id,
    refetchOnWindowFocus: false,
    successCallback(data) {
      const {
        title,
        company,
        jobType,
        jobTime,
        dateStart,
        dateEnd,
        description,
        companyLink,
        skill,
      } = data.experience

      dispatch(
        updateEditExperience({
          title,
          company,
          jobType,
          jobTime,
          dateStart,
          dateEnd,
          description,
          companyLink,
          skill,
        })
      )
    },
  })

  return <CreateExperience mode={id ? 'edit' : 'create'} />
}

export default ExperiencePage
