import { IImageProps } from '@/type/types'
import avatarMan from '../../public/assets/image/man.svg'
import avatarWoman from '../../public/assets/image/woman.svg'

// set Avater user or static avater
export const Avatar = (avatar: IImageProps | null, gender: string) => {
  if (avatar !== null) {
    return avatar.url
  } else {
    return gender === 'Male' || gender === 'مرد' ? avatarMan : avatarWoman
  }
}
