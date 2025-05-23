'use client'

import { useEffect, useState } from 'react'
import LoadSvgIcon from '@/utils/LoadSvgIcon'
import { getCurrentScheme } from '@/utils/ThemeHandler'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

const SidebarItem = ({ item, isLink = true }: any) => {
  const segment = useSelectedLayoutSegment()
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  getCurrentScheme().then((scheme) => {
    if (scheme === 'light' || scheme === 'dark') {
      setTheme(scheme)
    } else {
      setTheme('light')
    }
  })

  // useEffect(() => {
  //   let mounted = true
  //   getCurrentScheme().then((scheme) => {
  //     if (mounted && (scheme === 'light' || scheme === 'dark')) {
  //       setTheme(scheme)
  //     } else if (mounted) {
  //       setTheme('light')
  //     }
  //   })
  //   return () => {
  //     mounted = false
  //   }
  // }, [])

  return (
    <>
      {isLink ? (
        <Link href={item.href}>
          <span
            className={`w-full flex flex-col items-center py-3 border-b ${
              theme === 'dark'
                ? 'border-center-image-dark'
                : 'border-center-image'
            }`}
          >
            <LoadSvgIcon
              name={item.icon}
              size={20}
              color={
                `/${segment}` === item.href
                  ? 'var(--color-primary)'
                  : theme === 'dark'
                  ? 'var(--color-light-caption-light)'
                  : 'var(--color-caption-dark)'
              }
              weight={1.5}
            />
            <p
              className={`text-xxs font-medium mt-1 ${
                `/${segment}` === item.href
                  ? 'text-primary'
                  : 'text-caption-dark dark:text-light-caption-light'
              }`}
            >
              {item.title}
            </p>
          </span>
        </Link>
      ) : (
        <span className="w-full flex flex-col items-center py-5">
          <LoadSvgIcon
            name={item.icon}
            size={20}
            color={
              segment === item.href
                ? 'var(--color-primary)'
                : 'var(--color-caption-dark)'
            }
            weight={1.5}
          />
        </span>
      )}
    </>
  )
}

export default SidebarItem
