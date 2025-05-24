import { getCurrentScheme } from '@/utils/ThemeHandler'

interface Props {
  title: string
  value: string
}

const AboutItem = async ({ title, value }: Props) => {
  const theme = await getCurrentScheme()
  return (
    <div
      className={`flex justify-between items-center border-b pb-3 last:border-0 ${
        theme === 'dark' ? 'border-center-image-dark' : 'border-center-image'
      }`}
    >
      <p className="text-tiny font-medium text-primary capitalize">{title}</p>
      <p className="text-tiny font-medium text-caption dark:text-light-caption">
        {value}
      </p>
    </div>
  )
}

export default AboutItem
