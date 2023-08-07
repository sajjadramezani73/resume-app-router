import AboutItem from '@/components/aboutItem'
import { getAbout } from '@/service/queries'
import { getI18n } from '@/locales/server'

const AboutMe = async () => {
  const t = await getI18n()
  const { aboutMe: about } = await getAbout()
  return (
    <div className="grid gris-cols-1 md:grid-cols-2">
      <div className={`pt-7 md:border-e md:pe-6 border-vertical-image `}>
        <p className="text-base text-caption dark:text-lightCaption font-medium leading-8 capitalize">
          {about?.bio}
        </p>
      </div>
      <div className="pt-7 md:ps-6 grid gap-y-3">
        <AboutItem title={t('age')} value={about?.age} />
        <AboutItem title={t('phone')} value={'0' + about?.phone} />
        <AboutItem title={t('email')} value={about?.email} />
        <AboutItem title={t('address')} value={about?.address} />
      </div>
    </div>
  )
}

export default AboutMe
