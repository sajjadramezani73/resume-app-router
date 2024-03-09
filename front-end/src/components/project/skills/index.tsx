interface Props {
  skills: string[]
}

const Skills = ({ skills }: Props) => {
  return (
    <>
      {
        <div className="flex flex-wrap gap-x-2 gap-y-1 mt-2">
          {skills?.map((skill: string) => {
            return (
              <span
                key={skill}
                className="w-max bg-gray-200 dark:bg-lightCaptionLight/70 text-caption text-xxs font-medium px-1.5 pt-1 pb-0.5 rounded capitalize"
              >
                {skill}
              </span>
            )
          })}
        </div>
      }
    </>
  )
}

export default Skills
