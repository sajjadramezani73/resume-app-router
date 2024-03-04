import SidebarItem from './SidebarItem'
import { ILanguageProps } from '@/type/types'
import { getI18n } from '@/locales/server'

const SidebarItems = async () => {
  const t = await getI18n()

  const routeLinks = [
    {
      title: t('about'),
      icon: 'user',
      href: '/about',
    },
    {
      title: t('resume'),
      icon: 'file',
      href: '/resume',
    },
    {
      title: t('projects'),
      icon: 'project',
      href: '/projects',
    },
  ]

  return (
    <>
      {routeLinks.map((item) => {
        return <SidebarItem key={item.title} item={item} />
      })}
    </>
  )
}

export default SidebarItems
