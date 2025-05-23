import { projectAvatar } from '@/utils/ProjectAvatar'
import Image from 'next/image'
import { getI18n } from '@/locales/server'
import { getCurrentScheme } from '@/utils/ThemeHandler'
import { IImageProps } from '@/type/types'
import Link from 'next/link'

interface Props {
  project: {
    _id: string
    title: string
    briefDescription: string
    description: string
    skills: string[]
    links: string[]
    images: IImageProps[]
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
      <div className="sm:w-44 sm:min-w-[176px] aspect-2/1 sm:h-48 rounded-sm border overflow-hidden relative">
        <Image
          alt=""
          src={projectAvatar(project?.images)}
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="grow px-3 pt-3 sm:pt-1">
        <p className="font-semibold text-caption-dark dark:text-light-caption-light mb-3 capitalize">
          {project?.title}
        </p>
        <p className="text-caption dark:text-light-caption text-xs font-medium leading-6 text-justify sm:text-start capitalize">
          {project?.briefDescription}
        </p>
        <div className="flex flex-wrap gap-x-2 gap-y-1 mt-2">
          {project?.skills?.map((skill: string) => {
            return (
              <span
                key={skill}
                className="w-max bg-gray-200 dark:bg-light-caption-light/70 text-caption text-xxs font-medium px-1.5 pt-1 pb-0.5 rounded-sm capitalize"
              >
                {skill}
              </span>
            )
          })}
        </div>
        <div className="flex justify-end pt-4">
          <Link
            className="sm:w-auto! w-full px-4 text-sm rounded-lg h-8 flex items-center justify-center pt-0.5 text-white bg-primary capitalize"
            href={`/projects/${project?._id}`}
          >
            {t('viewDetail')}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
