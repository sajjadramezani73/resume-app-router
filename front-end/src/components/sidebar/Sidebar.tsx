import SwitchLanguage from './components/SwitchLanguage'
import SwitchTheme from './components/SwitchTheme'
import SidebarItems from './components/SidebarItems'

const Sidebar = () => {
  return (
    <div className="h-full flex flex-col gap-y-2">
      <div className="bg-white dark:bg-bgDark rounded pb-4">
        {/* <SwitchTheme /> */}
        {/* <SwitchLanguage /> */}
      </div>
      <div className="bg-white dark:bg-bgDark rounded flex-grow">
        <SidebarItems />
      </div>
    </div>
  )
}

export default Sidebar
