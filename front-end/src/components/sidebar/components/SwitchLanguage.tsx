'use client'

import { useEffect, useState } from 'react'
import { useChangeLocale, useCurrentLocale } from '@/locales/client'
import LoadSvgIcon from '@/utils/LoadSvgIcon'
import { useRouter } from 'next/navigation'

interface Ps {
  icon: string
  language: string
  shortLanguage: string
}

const SwitchLanguage = () => {
  const router = useRouter()
  const locale = useCurrentLocale()
  const changeLocale = useChangeLocale({})

  const [showOption, setShowOption] = useState(false)
  const [locales] = useState<string[]>(['fa', 'en'])
  const [localeList, setLocaleList] = useState<Ps[]>([])

  useEffect(() => {
    setShowOption(false)
    const newLocales = locales.map((item) => ({
      icon: setIcon(item),
      language: setLanguage(item),
      shortLanguage: item,
    }))

    setLocaleList(newLocales)
  }, [locales])

  const setIcon = (name: string) => {
    switch (name) {
      case 'fa':
        return 'iran'
      case 'en':
        return 'england'
      default:
        return 'iran'
    }
  }

  const setLanguage = (name: string) => {
    switch (name) {
      case 'fa':
        return 'persian'
      case 'en':
        return 'english'
      default:
        return 'persian'
    }
  }

  return (
    <div className="flex justify-between px-2 relative">
      <div
        className="w-full flex border dark:border-caption rounded-sm py-1 pe-1.5 ps-0.5 rtl cursor-pointer"
        onClick={() => setShowOption(!showOption)}
      >
        <LoadSvgIcon name="downArrow" size={18} />
        <p className="grow text-xs text-caption-dark dark:text-light-caption-light text-end pt-0.5 uppercase">
          {locale}
        </p>
      </div>
      {showOption && (
        <div className="p-2 absolute top-[30px] start-1.5 z-10 bg-white dark:bg-bg-dark border rounded-sm shadow-sm">
          {localeList?.map((item) => {
            return (
              <button
                key={item?.language}
                className="flex justify-between items-center rtl gap-x-1 p-1 rounded-sm mb-1.5 last:mb-0 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-50/10 duration-200"
                type="button"
                onClick={() => {
                  changeLocale(item.shortLanguage === 'fa' ? 'fa' : 'en')
                }}
              >
                <p className="text-sm text-caption-dark dark:text-light-caption-light capitalize pt-0.5">
                  {item.language}
                </p>
                <LoadSvgIcon name={item.icon} size={20} />
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default SwitchLanguage
