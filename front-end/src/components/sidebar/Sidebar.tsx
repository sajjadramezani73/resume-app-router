import SwitchLanguage from './components/SwitchLanguage';
import SwitchTheme from './components/SwitchTheme';
import SidebarItems from './components/SidebarItems';
import { ILanguageProps } from '@/type/types';

const Sidebar = ({ language }: ILanguageProps) => {


    return (
        <div className="h-full flex flex-col gap-y-2">
            <div className="bg-white dark:bg-bgDark rounded pb-4">
                {/* <SwitchTheme /> */}
                {/* <SwitchLanguage /> */}
            </div>
            <div className="bg-white dark:bg-bgDark rounded flex-grow">
                <SidebarItems language={language} />
            </div>
        </div>
    )
}

export default Sidebar