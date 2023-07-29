import { getDictionary } from '@/i18n/get-dictionary'
import AboutItem from '@/components/aboutItem'
import { ILanguageProps } from '@/type/types'
import { getAbout } from '@/service/queries'

const AboutMe = async ({ language }: ILanguageProps) => {
  const dictionary = await getDictionary(language)
  const { aboutMe: about } = await getAbout()
  return (
    <div className="grid gris-cols-1 md:grid-cols-2">
      <div className={`pt-7 md:border-e md:pe-6 border-vertical-image `}>
        <p className="text-base text-caption dark:text-lightCaption font-medium leading-8 capitalize">
          {about?.bio}
        </p>
      </div>
      <div className="pt-7 md:ps-6 grid gap-y-3">
        <AboutItem title={dictionary.age} value={about?.age} />
        <AboutItem title={dictionary.phone} value={'0' + about?.phone} />
        <AboutItem title={dictionary.email} value={about?.email} />
        <AboutItem title={dictionary.address} value={about?.address} />
      </div>
    </div>
  )
}

export default AboutMe
