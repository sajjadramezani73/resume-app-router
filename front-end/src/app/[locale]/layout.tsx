import './globals.css'
import type { Metadata } from 'next'
import Sidebar from '@/components/sidebar/Sidebar'
import UserInfo from '@/components/userInfo/UserInfo'
import SidebarItems from '@/components/sidebar/components/SidebarItems'
import { getCurrentLocale } from '@/locales/server'
import { getCurrentScheme } from '@/utils/ThemeHandler'
import SwitchLanguage from '@/components/sidebar/components/SwitchLanguage'
import SwitchTheme from '@/components/sidebar/components/SwitchTheme'
import { LanguageProvider } from '@/provider/LanguageProvider'

export const metadata: Metadata = {
  title: 'sajjad ramezani',
  description: 'Resume Project With Next.js App Router',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const theme = await getCurrentScheme()
  const locale = getCurrentLocale()

  return (
    <html lang={locale} className={theme === 'dark' ? 'dark' : ''}>
      <body>
        <LanguageProvider locale={locale}>
          <div
            className={`${
              locale === 'fa' ? 'font-iranyekan' : 'font-roboto'
            } w-full h-full flex justify-center items-center md:py-10 bg-gradient-to-br from-secondary/70 to-primary/70 dark:from-[#17171b] dark:to-[#28282f]`}
          >
            <div
              className={`md:container w-full h-full flex flex-col md:flex-row md:gap-x-4 ${
                locale === 'fa' ? 'rtl' : 'ltr'
              }`}
            >
              <div className="hidden md:block w-[72px] min-w-[72px] py-4">
                <Sidebar />
              </div>
              <div
                className={`flex justify-between items-center px-4 border-b md:hidden h-[58px] min-h-[58px] bg-white dark:bg-bgDark`}
              >
                <span className="w-20">
                  <SwitchLanguage />{' '}
                </span>
                <span>
                  <SwitchTheme />{' '}
                </span>
              </div>
              <div className="flex flex-col md:flex-row flex-grow overflow-hidden overflow-y-auto md:overflow-y-visible">
                <div
                  className={`flex-grow min-h-full md:w-4/12 bg-white dark:bg-bgDark md:rounded relative ${
                    locale == 'fa' ? 'shadow-shadowLeft' : 'shadow-shadowRight'
                  }`}
                >
                  <UserInfo />
                </div>
                <div className="md:py-4 md:w-8/12 flex-grow">
                  <div
                    className=" h-full bg-white dark:bg-bgDark rounded-e p-4 md:p-7 md:ps-10"
                    id="info_section"
                  >
                    {children}
                  </div>
                </div>
              </div>
              <div
                className={`grid grid-cols-3 md:hidden h-16 min-h-[64px] bg-white dark:bg-bgDark border-t`}
              >
                <SidebarItems />
              </div>
            </div>
          </div>
          <div id="modal-root"></div>
        </LanguageProvider>
      </body>
    </html>
  )
}
