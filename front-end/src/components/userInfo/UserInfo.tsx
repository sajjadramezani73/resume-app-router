import { ILanguageProps } from '@/type/types'
import SocialNetworks from './components/SocialNetworks'
import LoadSvgIcon from '@/utils/LoadSvgIcon'
import { getDictionary } from '@/i18n/get-dictionary'
import { getAbout } from '@/service/queries'
import { avatar } from '@/utils/AvatarSet'
import Image from 'next/image'

const UserInfo = async ({ language }: ILanguageProps) => {
  const dictionary = await getDictionary(language)

  const { aboutMe: about } = await getAbout()

  return (
    <div className="w-full h-full flex flex-col justify-between items-center pt-10 md:pt-20">
      <div className="text-center">
        <div className="w-[180px] h-[180px] rounded-full overflow-hidden border mx-auto relative">
          <Image
            src={avatar(about?.avatar)}
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
          <SocialNetworks socialNetworks={about?.socialsNetwork} />
        </div>
      </div>
      <div
        className={`border-t border-b md:border-b-0 p-4 w-full flex justify-center items-center gap-x-2 hover:gap-x-3 duration-300 cursor-pointer border-center-image group`}
      >
        <p className="text-base text-captionDark dark:text-lightCaptionLight font-bold uppercase">
          {dictionary.downloadCV}
        </p>
        <LoadSvgIcon
          name="download"
          color="var(--color-captionDark)"
          // color={theme === 'dark' ? "var(--color-lightCaptionLight)" : "var(--color-captionDark)"}
          size={16}
          weight={2}
        />
      </div>
    </div>
  )
}

export default UserInfo
