'use client'

import { I18nProviderClient } from '@/locales/client'
import LoadSvgIcon from '@/utils/LoadSvgIcon'
import type { ReactNode } from 'react'

type ProviderProps = {
  locale: string
  children: ReactNode
}

export function LanguageProvider({ locale, children }: ProviderProps) {
  return (
    <I18nProviderClient
      locale={locale}
      fallback={
        <div className="w-full h-full flex justify-center items-center md:py-10 bg-linear-to-br from-secondary/70 to-primary/70 dark:from-[#17171b] dark:to-[#28282f]">
          <LoadSvgIcon
            name="loading"
            size={40}
            color="#ffffff"
            fill="#ffffff"
          />
        </div>
      }
    >
      {children}
    </I18nProviderClient>
  )
}
