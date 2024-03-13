import Empty from '@/components/empty'
import ExperienceItem from '@/components/experienceItem'
import { getExperiences } from '@/service/queries'

const Experiences = async () => {
  const { experiences } = await getExperiences()

  return (
    <div>
      {experiences.length > 0 ? (
        experiences.map((item: any) => {
          return <ExperienceItem experience={item} key={item._id} />
        })
      ) : (
        <Empty />
      )}
    </div>
  )
}

export default Experiences
