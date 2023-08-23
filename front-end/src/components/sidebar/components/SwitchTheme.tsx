/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import LoadSvgIcon from '@/utils/LoadSvgIcon'
import { getCurrentScheme, toggleTheme } from '@/utils/ThemeHandler'
import { useRouter } from 'next/navigation'

const SwitchTheme = async () => {
  const router = useRouter()
  const theme = await getCurrentScheme()

  const toggle = async () => {
    await toggleTheme()
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
          color="var(--color-lightCaptionLight)"
        />
      ) : (
        <LoadSvgIcon
          name="moon"
          size={20}
          weight={1.5}
          color="var(--color-captionDark)"
        />
      )}
    </span>
  )
}

export default SwitchTheme
