import { getCurrentLocale } from '@/locales/server'
import { getCurrentScheme } from '@/utils/ThemeHandler'

const Title = async ({ children }: { children: string }) => {
  const theme = await getCurrentScheme()
  const locale = getCurrentLocale()

  return (
    <p
      className={`pb-7 text-xl font-bold text-caption-dark dark:text-light-caption-light capitalize relative border-b 
        ${
          locale == 'fa'
            ? theme === 'dark'
              ? 'border-bottom-image-to-left-dark'
              : 'border-bottom-image-to-left'
            : theme === 'dark'
            ? 'border-bottom-image-to-right-dark'
            : 'border-bottom-image-to-right'
        } `}
    >
      {children}
      <span className="absolute top-1 -start-2.5 w-7 h-7 rounded-full bg-primary/5 dark:bg-primary/10"></span>
    </p>
  )
}

export default Title
