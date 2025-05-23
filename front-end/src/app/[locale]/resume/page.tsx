import Title from '@/components/titlePage'
import LoadSvgIcon from '@/utils/LoadSvgIcon'
import { Suspense } from 'react'
import ExperiencesLoading from './ExperiencesLoading'
import Experiences from './Experiences'
import EducationsLoading from './EducationsLoading'
import Educations from './Educations'
import { getI18n } from '@/locales/server'
import { getCurrentScheme } from '@/utils/ThemeHandler'

const Resume = async () => {
  const t = await getI18n()
  const theme = await getCurrentScheme()

  return (
    <div className="h-full flex flex-col">
      <Title>{t('resume')}</Title>
      <div className="pt-7 grow overflow-hidden overflow-y-auto no-scroll">
        <div
          className={`flex items-center pb-7 mb-7 border-b ${
            theme === 'dark'
              ? 'border-center-image-dark'
              : 'border-center-image'
          }`}
        >
          <LoadSvgIcon
            name="bag"
            size={32}
            weight={2}
            color="var(--color-primary)"
          />
          <p className="text-base font-bold text-caption-dark dark:text-light-caption-light ms-2 capitalize">
            {t('experience')}
          </p>
        </div>
        <Suspense fallback={<ExperiencesLoading />}>
          <Experiences />
        </Suspense>

        <div
          className={`flex items-center  pb-7 mb-7 mt-10 border-b ${
            theme === 'dark'
              ? 'border-center-image-dark'
              : 'border-center-image'
          }`}
        >
          <LoadSvgIcon
            name="education"
            size={32}
            weight={2}
            color="var(--color-primary)"
          />
          <p className="text-base font-bold text-caption-dark dark:text-light-caption-light ms-2 capitalize">
            {t('education')}
          </p>
        </div>
        <Suspense fallback={<EducationsLoading />}>
          <Educations />
        </Suspense>
      </div>
    </div>
  )
}

export default Resume
