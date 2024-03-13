import EducationItem from '@/components/educationItem'
import Empty from '@/components/empty'
import { getEducations } from '@/service/queries'

const Educations = async () => {
  const { educations } = await getEducations()

  return (
    <div>
      {educations.length > 0 ? (
        educations?.map((item: any) => {
          return <EducationItem education={item} key={item?._id} />
        })
      ) : (
        <Empty />
      )}
    </div>
  )
}

export default Educations
