import ExperienceItem from '@/components/experienceItem'
import { getExperiences } from '@/service/queries'

const Experiences = async () => {
  const { experiences } = await getExperiences()

  return (
    <div>
      {experiences.map((item: any) => {
        return <ExperienceItem experience={item} key={item._id} />
      })}
    </div>
  )
}

export default Experiences
