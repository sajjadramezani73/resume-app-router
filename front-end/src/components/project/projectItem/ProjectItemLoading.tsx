import { getCurrentScheme } from '@/utils/ThemeHandler'

const ProjectItemLoading = async () => {
  const theme = await getCurrentScheme()
  return (
    <div
      className={`flex flex-col sm:flex-row mb-4 pb-4 border-b last:border-0 ${
        theme === 'dark' ? 'border-center-image-dark' : 'border-center-image'
      }`}
    >
      <div className="sm:w-44 sm:min-w-[176px] aspect-2/1 sm:h-48 rounded-sm bg-gray-100 dark:bg-gray-50/20 animate-pulse"></div>
      <div className="grow px-3 pt-3 sm:pt-1">
        <div className="w-40 h-5 rounded-xs mb-3 bg-gray-100 dark:bg-gray-50/20 animate-pulse"></div>
        <div className="w-full h-5 rounded-xs bg-gray-100 dark:bg-gray-50/20 animate-pulse"></div>
        <div className="w-full h-5 rounded-xs bg-gray-100 dark:bg-gray-50/20 animate-pulse mt-2"></div>
        <div className="w-1/2 h-5 rounded-xs bg-gray-100 dark:bg-gray-50/20 animate-pulse mt-2"></div>
        <div className="flex flex-wrap gap-x-2 gap-y-1 mt-2">
          {[1, 2, 3, 4, 5].map((item) => {
            return (
              <span
                key={item}
                className="w-16 h-6 rounded-xs bg-gray-100 dark:bg-gray-50/20 animate-pulse"
              ></span>
            )
          })}
        </div>
        <div className="flex justify-end pt-4">
          <div className="w-full sm:w-28 h-8 rounded-sm bg-gray-100 dark:bg-gray-50/20 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

export default ProjectItemLoading
