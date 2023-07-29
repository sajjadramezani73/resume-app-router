import Title from '@/components/titlePage'
import { getDictionary } from '@/i18n/get-dictionary'
import { Locale } from '@/i18n/i18n-config'
import { Suspense } from 'react'
import LoadingAbout from './LoadingAbout'
import AboutMe from './AboutMe'

const About = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const dictionary = await getDictionary(lang)

  return (
    <div className="h-full">
      <Title>{dictionary.about}</Title>
      <Suspense fallback={<LoadingAbout />}>
        <AboutMe language={lang} />
      </Suspense>
    </div>
  )
}

export default About
