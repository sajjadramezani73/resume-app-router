/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { useEffect, useState } from 'react'
import LoadSvgIcon from '@/utils/LoadSvgIcon'
import { getCurrentScheme, toggleTheme } from '@/utils/ThemeHandler'
import { useRouter } from 'next/navigation'

const SwitchTheme = () => {
  const router = useRouter()
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const fetchTheme = async () => {
      const current = await getCurrentScheme()
      setTheme(current === 'dark' ? 'dark' : 'light')
    }
    fetchTheme()
  }, [])

  const toggle = async () => {
    await toggleTheme()
    const current = await getCurrentScheme()
    setTheme(current === 'dark' ? 'dark' : 'light')
    router.refresh()
  }

  return (
    <span
      className="w-full flex flex-col items-center py-5 cursor-pointer"
      onClick={toggle}
    >
      {theme === 'dark' ? (
        <LoadSvgIcon
          name="sun"
          size={20}
          weight={1.5}
          color="var(--color-light-caption-light)"
        />
      ) : (
        <LoadSvgIcon
          name="moon"
          size={20}
          weight={1.5}
          color="var(--color-caption-dark)"
        />
      )}
    </span>
  )
}

export default SwitchTheme
