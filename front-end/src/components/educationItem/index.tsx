interface Props {
  education: {
    title: string
    university: string
    location: string
    dateStart: string
    dateEnd: string
    grade: string
  }
}
const EducationItem = ({ education }: Props) => {
  return (
    <div className="w-full md:flex grid grid-flow-col justify-start group">
      <div className="md:w-44 md:min-w-[176px] md:text-end">
        <p className="text-xs text-captionDark dark:text-lightCaptionLight/70 font-semibold pt-0.5">
          {education?.dateStart} - {education?.dateEnd}
        </p>
        <p className="text-xs text-captionLight pt-0.5">
          {education?.location}
        </p>
      </div>
      <div className="w-fit border-r relative mx-6 ms-2.5 md:ms-6 -order-1 md:order-none row-span-2">
        <span className="absolute top-1.5 left-1/2 -translate-x-1/2 w-[10px] h-[10px] bg-white rounded-full border-2 border-primary ring-[5px] ring-primary/30"></span>
      </div>
      <div className="pb-7 pt-2 md:pt-0 group-last:pb-0 w-full">
        <p className="text-base text-captionDark dark:text-lightCaptionLight font-semibold capitalize">
          {education?.title}
        </p>
        <p className="text-sm text-caption dark:text-lightCaption mt-2">
          {education?.university}
        </p>
        <p className="text-sm text-caption dark:text-lightCaption mt-2">
          {education?.grade}
        </p>
      </div>
    </div>
  )
}

export default EducationItem
