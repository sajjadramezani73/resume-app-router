import { Outlet } from 'react-router-dom'
import Sidebar from '../container/sidebar/Sidebar'
import AvatarMenu from '../container/avatar/Avatar'

const Dashboard = () => {
  return (
    <div className="min-h-full flex bg-body">
      <div className="w-[300px] min-w-[300px] shadow-left bg-white">
        <div className="h-20 bg-primary/80"></div>
        <div className="p-4 pr-0">
          <Sidebar />
        </div>
      </div>
      <div className="flex-grow">
        <div className="h-20 bg-primary">
          <div className="h-full flex justify-end items-center pl-8">
            <AvatarMenu />
          </div>
        </div>
        <div className="p-8">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
