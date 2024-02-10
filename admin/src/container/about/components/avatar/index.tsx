import { Avatar } from '@/utils/AvatarSet'

const UserAvatar = () => {
  return (
    <div className="w-[250px] h-[250px] rounded-full">
      <img src={Avatar('', 'Male')} alt="" />
    </div>
  )
}

export default UserAvatar
