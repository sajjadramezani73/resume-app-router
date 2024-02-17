import { IImage } from '@/components/uploader/type'
import { Avatar } from '@/utils/AvatarSet'

interface Props {
  avatar: IImage | null
  gender: { fa: string; en: string }
}

const UserAvatar = ({ avatar, gender }: Props) => {
  console.log(avatar, gender)

  return (
    <div className="w-[250px] h-[250px] rounded-full overflow-hidden">
      <img
        src={Avatar(avatar, gender.en)}
        alt=""
        className="w-full h-full object-cover"
      />
    </div>
  )
}

export default UserAvatar
