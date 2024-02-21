import { IImageProps } from '@/type/types'

// set Avater user or static avater
export const Avatar = (avatar: IImageProps | null, gender: string) => {
  if (avatar !== null) {
    return avatar.url
  } else {
    return gender === 'Male' || gender === 'مرد'
      ? '/assets/image/man.svg'
      : './assets/image/woman.svg'
  }
}
