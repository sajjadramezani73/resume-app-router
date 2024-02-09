import manAvatar from '../assets/images/man.svg'
import womanAvatar from '../assets/images/woman.svg'

// set Avater user or static avater
export const Avatar = (avatar: string, gender: string) => {
  if (avatar !== '') {
    return avatar
  } else {
    return gender === 'male' ? manAvatar : womanAvatar
  }
}
