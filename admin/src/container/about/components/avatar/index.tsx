import { Avatar } from '@/utils/AvatarSet'

const UserAvatar = () => {
  return (
    <div className="w-[250px] h-[250px] bg-red-200 rounded-full">
      <img src={Avatar('', 'male')} alt="" />
    </div>
  )
}

export default UserAvatar
