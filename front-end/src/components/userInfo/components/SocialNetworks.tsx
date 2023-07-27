'use client'

// import { useThemeAction } from '@/store/themeSlice';
import LoadSvgIcon from '@/utils/LoadSvgIcon'
import { useEffect, useState } from 'react'

const SocialNetworks = ({ socialNetworks }: { socialNetworks: string[] }) => {
  // const { theme } = useThemeAction()

  const [arraySocials, setArraySocials] = useState([])

  useEffect(() => {
    socialNetworks && setArraySocials(Object.keys(socialNetworks))
  }, [socialNetworks])

  return (
    <>
      {arraySocials?.map((item) => {
        return (
          <a key={item} href={socialNetworks[item]} target="_blank">
            <LoadSvgIcon
              name={item}
              color="var(--color-captionDark)"
              // color={theme === 'dark' ? "var(--color-lightCaptionLight)" : "var(--color-captionDark)"}
              size={18}
            />
          </a>
        )
      })}
    </>
  )
}

export default SocialNetworks
