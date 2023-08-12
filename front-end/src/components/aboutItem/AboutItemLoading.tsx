import { getCurrentScheme } from '@/utils/ThemeHandler'

const AboutItemLoading = async () => {
  const theme = await getCurrentScheme()

  return (
    <div
      className={`flex justify-between items-center border-b pb-3 last:border-0 ${
        theme === 'dark' ? 'border-center-image-dark' : 'border-center-image'
      }`}
    >
      <div className="w-12 h-6 bg-gray-100 dark:bg-gray-50/20 rounded-sm animate-pulse"></div>
      <div className="w-20 h-6 bg-gray-100 dark:bg-gray-50/20 rounded-sm animate-pulse"></div>
    </div>
  )
}

export default AboutItemLoading
