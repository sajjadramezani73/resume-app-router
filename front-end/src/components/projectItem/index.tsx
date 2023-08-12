import { projectAvatar } from '@/utils/ProjectAvatar'
import Image from 'next/image'
import Button from '../button'
import { getI18n } from '@/locales/server'
import { getCurrentScheme } from '@/utils/ThemeHandler'

interface Props {
  project: {
    title: string
    briefDescription: string
    description: string
    skills: string[]
    links: { id: number; link: string }[]
    images: { id: string; path: string }[]
  }
}

const ProjectItem = async ({ project }: Props) => {
  const t = await getI18n()
  const theme = await getCurrentScheme()

  return (
    <div
      className={`flex flex-col sm:flex-row mb-4 pb-4 border-b last:border-0 ${
        theme === 'dark' ? 'border-center-image-dark' : 'border-center-image'
      }`}
    >
      <div className="sm:w-44 sm:min-w-[176px] aspect-[2/1] sm:h-48 rounded border overflow-hidden relative">
        <Image
          alt=""
          src={projectAvatar(project?.images)}
          fill={true}
          className="object-cover sm:object-fill"
        />
      </div>
      <div className="flex-grow px-3 pt-3 sm:pt-1">
        <p className="font-semibold text-captionDark dark:text-lightCaptionLight mb-3 capitalize">
          {project?.title}
        </p>
        <p className="text-caption dark:text-lightCaption text-xs font-medium leading-6 text-justify sm:text-start capitalize">
          {project?.briefDescription}
        </p>
        <div className="flex flex-wrap gap-x-2 gap-y-1 mt-2">
          {project?.skills?.map((skill: any) => {
            return (
              <span
                key={skill}
                className="w-max bg-gray-200 dark:bg-lightCaptionLight/70 text-caption text-xxs font-medium px-1.5 pt-1 pb-0.5 rounded capitalize"
              >
                {skill}
              </span>
            )
          })}
        </div>
        <div className="flex justify-end pt-4">
          <Button
            title={t('viewOnline')}
            className="sm:!w-auto px-4 h-8 text-xs pt-1 capitalize"
            type="link"
            link={project?.links[0]?.link}
          />
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
