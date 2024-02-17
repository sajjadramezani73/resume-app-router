import { IImage } from '@/components/uploader/type'
import manAvatar from '../assets/images/man.svg'
import womanAvatar from '../assets/images/woman.svg'

// set Avater user or static avater
export const Avatar = (avatar: IImage | null, gender: string) => {
  if (avatar !== null) {
    return avatar.url
  } else {
    return gender === 'Male' ? manAvatar : womanAvatar
  }
}
