'use client'

import { useChangeLocale } from '@/locales/client'

export function Switch() {
  const changeLocale = useChangeLocale({
    // basePath: '/base',
  })

  return (
    <>
      <button type="button" onClick={() => changeLocale('en')}>
        EN
      </button>
      <button type="button" onClick={() => changeLocale('fa')}>
        fa
      </button>
    </>
  )
}
