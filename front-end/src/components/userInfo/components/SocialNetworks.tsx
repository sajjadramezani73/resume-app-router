'use client'

import { ISocialNetworkProps } from '@/type/types'
import LoadSvgIcon from '@/utils/LoadSvgIcon'
import { CookieValueTypes } from 'cookies-next'

const SocialNetworks = ({
  socialNetworks,
  theme,
}: {
  socialNetworks: ISocialNetworkProps[]
  theme: string | CookieValueTypes
}) => {

  return (
    <>
      {socialNetworks?.map((item) => {
        return (
          <a key={item._id} href={item?.link} target="_blank">
            <LoadSvgIcon
              name={item?.icon}
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
