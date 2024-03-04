import { createI18nServer } from 'next-international/server'
import fa from './fa'

export const { getI18n, getScopedI18n, getCurrentLocale, getStaticParams } =
  createI18nServer(
    {
      en: () => import('./en'),
      fa: () => import('./fa'),
    },
    {
      // Uncomment to use custom segment name
      // segmentName: 'locale',
      // Uncomment to set fallback locale
      fallbackLocale: fa,
    }
  )
