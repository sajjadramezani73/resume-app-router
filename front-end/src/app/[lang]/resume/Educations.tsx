import EducationItem from '@/components/educationItem'
import { getEducations } from '@/service/queries'

const Educations = async () => {
  const { educations } = await getEducations()

  return (
    <>
      {educations?.map((item: any) => {
        return <EducationItem education={item} key={item?._id} />
      })}
    </>
  )
}

export default Educations
