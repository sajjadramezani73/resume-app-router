import Title from '@/components/titlePage'
import { Suspense } from 'react'
import LoadingAbout from './LoadingAbout'
import AboutMe from './AboutMe'
import { getI18n } from '@/locales/server'

const About = async () => {
  const t = await getI18n()

  return (
    <div className="h-full">
      <Title>{t('about')}</Title>
      <Suspense fallback={<LoadingAbout />}>
        <AboutMe />
      </Suspense>
    </div>
  )
}

export default About
