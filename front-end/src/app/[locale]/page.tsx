import { getI18n } from '@/locales/server'
import LocaleSwitcher from '../../components/LocalSwitcher'

export default async function Home() {
  const t = await getI18n()
  return (
    <div className="">
      {/* <LocaleSwitcher /> */}
      {t('about')}
    </div>
  )
}
