import SocialNetworks from './components/SocialNetworks'
import LoadSvgIcon from '@/utils/LoadSvgIcon'
import { getAbout } from '@/service/queries'
import Image from 'next/image'
import { getI18n } from '@/locales/server'
import { getCurrentScheme } from '@/utils/ThemeHandler'
import { Avatar } from '@/utils/AvatarSet'
import Empty from '../empty'

const UserInfo = async () => {
  const t = await getI18n()
  const theme = await getCurrentScheme()

  const { aboutMe: about } = await getAbout()

  return (
    <>
      {Object.keys(about).length > 0 ? (
        <div className="w-full h-full flex flex-col justify-between items-center pt-10 md:pt-20">
          <div className="text-center">
            <div className="w-[180px] h-[180px] rounded-full overflow-hidden border mx-auto relative">
              <Image
                src={Avatar(about?.avatar, about?.gender)}
                alt="avatar"
                fill={true}
                className="object-fit"
              />
            </div>
            <p className="text-[34px] text-captionDark dark:text-lightCaptionLight font-bold mt-6">
              {about?.firstName + ' ' + about?.lastName}
            </p>
            <p className="text-base text-primary font-medium">{about?.job}</p>
            <div className="w-full flex justify-center items-center gap-x-4 mt-8">
              <SocialNetworks
                socialNetworks={about?.socialsNetwork}
                theme={theme}
              />
            </div>
          </div>
          <div
            className={`border-t border-b md:border-b-0 p-4 w-full flex justify-center items-center gap-x-2 hover:gap-x-3 duration-300 cursor-not-allowed group  ${
              theme === 'dark'
                ? 'border-center-image-dark'
                : 'border-center-image'
            }`}
          >
            <p className="text-base text-captionDark dark:text-lightCaptionLight font-bold uppercase">
              {t('downloadCV')}
            </p>
            <LoadSvgIcon
              name="download"
              color={
                theme === 'dark'
                  ? 'var(--color-lightCaptionLight)'
                  : 'var(--color-captionDark)'
              }
              size={16}
              weight={2}
            />
          </div>
        </div>
      ) : (
        <Empty />
      )}
    </>
  )
}

export default UserInfo
