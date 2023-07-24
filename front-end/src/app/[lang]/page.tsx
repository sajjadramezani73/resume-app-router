import { getDictionary } from '@/i18n/get-dictionary'
import { Locale } from '@/i18n/i18n-config'
import Image from 'next/image'
import LocaleSwitcher from './components/LocalSwitcher'


export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)
  return (
    <div className="">
      <LocaleSwitcher />
      {dictionary.about}
    </div>
  )
}
