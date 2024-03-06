import { getI18n } from '@/locales/server'

interface Props {
  description: string
}
const Description = async ({ description }: Props) => {
  const t = await getI18n()
  return (
    <>
      <p className="text-captionDark dark:text-lightCaptionLight text-[18px] font-semibold capitalize mb-4">
        {t('projectDetail.description')}
      </p>
      <div
        className="text-captionDark dark:text-lightCaptionLight text-tiny capitalize"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
    </>
  )
}

export default Description
