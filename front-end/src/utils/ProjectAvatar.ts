import { IImageProps } from '@/type/types'

// set Avater user or static avater
export const projectAvatar = (images: IImageProps[]) => {
  if (images.length > 0) {
    return images[0].url
  } else {
    return '/assets/image/empty.jpg'
  }
}
