import Button from '@/components/button'
import { getI18n } from '@/locales/server'

interface Props {
  links: string[]
}
const Links = async ({ links }: Props) => {
  const t = await getI18n()

  return (
    <div className="flex flex-wrap justify-start gap-4">
      {links?.map((item, index) => (
        <Button
          key={item}
          title={t('viewOnline') + ' - ' + (index + 1)}
          className="sm:w-auto! px-4 h-8 text-xs pt-1 capitalize"
          type="link"
          link={item}
        />
      ))}
    </div>
  )
}

export default Links
