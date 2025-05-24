import { getI18n } from '@/locales/server'

interface Props {
  description: string
}
const Description = async ({ description }: Props) => {
  const t = await getI18n()
  return (
    <>
      <p className="text-caption-dark dark:text-light-caption-light text-[18px] font-semibold capitalize mb-4">
        {t('projectDetail.description')}
      </p>
      <div
        className="text-caption-dark dark:text-light-caption-light text-tiny capitalize"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
    </>
  )
}

export default Description
