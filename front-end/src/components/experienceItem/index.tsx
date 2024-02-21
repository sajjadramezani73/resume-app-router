import { getI18n } from '@/locales/server'

interface Props {
  experience: {
    title: string
    company: string
    jobType: string
    jobTime: string
    dateStart: string
    dateEnd: string
    description: string
    companyLink: string
    skill: string[]
    soFar: boolean
  }
}
const ExperienceItem = async ({ experience }: Props) => {
  const t = await getI18n()
  return (
    <div className="w-full md:flex grid grid-flow-col justify-start group">
      <div className="md:w-44 md:min-w-[176px] md:text-end">
        <p className="text-xs text-captionDark dark:text-lightCaptionLight/70 font-semibold pt-0.5">
          {experience?.dateStart} -{' '}
          {experience?.soFar ? t('soFar') : experience?.dateEnd}
        </p>
        <a
          href={experience?.companyLink}
          target="_blank"
          className="text-xs text-captionLight pt-0.5"
        >
          {experience?.company}
        </a>
      </div>
      <div className="w-fit border-r relative mx-6 ms-2.5 md:ms-6 -order-1 md:order-none row-span-2">
        <span className="absolute top-1.5 left-1/2 -translate-x-1/2 w-[10px] h-[10px] bg-white rounded-full border-2 border-primary ring-[5px] ring-primary/30"></span>
      </div>
      <div className="pb-7 pt-2 md:pt-0 group-last:pb-0 w-full">
        <p className="text-base text-captionDark dark:text-lightCaptionLight font-semibold capitalize">
          {experience?.title}
        </p>
        <p className="text-sm text-caption dark:text-lightCaption mt-2">
          {experience?.description}
        </p>
        <div className="flex flex-wrap gap-x-2 gap-y-1 mt-2">
          {experience?.skill.map((item) => {
            return (
              <span
                key={item}
                className="w-max bg-gray-200 dark:bg-lightCaptionLight/70 text-caption text-xxs font-medium px-1.5 pt-1 pb-0.5 rounded"
              >
                {item}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ExperienceItem
