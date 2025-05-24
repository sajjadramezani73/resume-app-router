import AboutItem from '@/components/aboutItem'
import { getAbout } from '@/service/queries'
import { getI18n } from '@/locales/server'
import { getCurrentScheme } from '@/utils/ThemeHandler'
import Empty from '@/components/empty'

const AboutMe = async () => {
  const t = await getI18n()
  const { aboutMe: about } = await getAbout()
  const theme = await getCurrentScheme()

  return (
    <>
      {Object.keys(about).length > 0 ? (
        <div className="grid gris-cols-1 md:grid-cols-2 grow overflow-hidden overflow-y-auto no-scroll">
          <div
            className={`pt-7 md:border-e md:pe-6 ${
              theme === 'dark'
                ? 'border-vertical-image-dark'
                : 'border-vertical-image'
            }`}
          >
            <p className="text-base text-caption dark:text-light-caption font-medium leading-8 capitalize">
              {about?.bio}
            </p>
          </div>
          <div className="pt-7 md:ps-6 grid content-start gap-y-3">
            <AboutItem title={t('age')} value={about?.age} />
            <AboutItem title={t('phone')} value={about?.phone} />
            <AboutItem title={t('email')} value={about?.email} />
            <AboutItem title={t('address')} value={about?.address} />
          </div>
        </div>
      ) : (
        <div className="grow">
          <Empty />
        </div>
      )}
    </>
  )
}

export default AboutMe
