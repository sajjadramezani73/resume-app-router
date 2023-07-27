import SidebarItem from './SidebarItem'
import { getDictionary } from '@/i18n/get-dictionary'
import { ILanguageProps } from '@/type/types'

const SidebarItems = async ({ language }: ILanguageProps) => {
  const dictionary = await getDictionary(language)

  const routeLinks = [
    {
      title: dictionary.about,
      icon: 'user',
      href: 'about',
    },
    {
      title: dictionary.resume,
      icon: 'file',
      href: 'resume',
    },
    {
      title: dictionary.projects,
      icon: 'project',
      href: 'projects',
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
