'use client'

import LoadSvgIcon from '@/utils/LoadSvgIcon'
import { CookieValueTypes } from 'cookies-next'
import { useEffect, useState } from 'react'

const SocialNetworks = ({
  socialNetworks,
  theme,
}: {
  socialNetworks: string[]
  theme: string | CookieValueTypes
}) => {
  const [arraySocials, setArraySocials] = useState<string[]>([])

  useEffect(() => {
    socialNetworks && setArraySocials(Object.keys(socialNetworks))
  }, [socialNetworks])

  return (
    <>
      {arraySocials?.map((item) => {
        return (
          <a
            key={item}
            href={socialNetworks[item as unknown as number]}
            target="_blank"
          >
            <LoadSvgIcon
              name={item}
              color={
                theme === 'dark'
                  ? 'var(--color-lightCaptionLight)'
                  : 'var(--color-captionDark)'
              }
              size={18}
            />
          </a>
        )
      })}
    </>
  )
}

export default SocialNetworks
