import SwitchLanguage from './components/SwitchLanguage'
import SwitchTheme from './components/SwitchTheme'
import SidebarItems from './components/SidebarItems'

const Sidebar = () => {
  return (
    <div className="h-full flex flex-col gap-y-2">
      <div className="bg-white dark:bg-bg-dark rounded-sm pb-4">
        <SwitchTheme />
        <SwitchLanguage />
      </div>
      <div className="bg-white dark:bg-bg-dark rounded-sm grow">
        <SidebarItems />
      </div>
    </div>
  )
}

export default Sidebar
