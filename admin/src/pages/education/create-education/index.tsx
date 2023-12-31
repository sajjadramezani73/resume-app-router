import { Keys } from '@/constants/Keys'
import { Paths } from '@/constants/Paths'
import CreateEducation from '@/container/educations/create-education'
import { useRequest } from '@/services/axios/useRequest'
import { useEducationActions } from '@/store/educationSlice'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

const EducationPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { updateEditEducation } = useEducationActions()

  useRequest({
    queryKey: Keys.education.educationOne,
    url: `${Paths.education.base}/${id}`,
    enabled: !!id,
    refetchOnWindowFocus: false,
    successCallback(data) {
      const { title, university, location, dateStart, dateEnd, grade } =
        data.education

      dispatch(
        updateEditEducation({
          title,
          university,
          location,
          dateStart,
          dateEnd,
          grade,
        })
      )
    },
  })

  return <CreateEducation mode={id ? 'edit' : 'create'} />
}

export default EducationPage
