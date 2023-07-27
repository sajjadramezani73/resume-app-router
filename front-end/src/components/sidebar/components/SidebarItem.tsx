'use client'

import LoadSvgIcon from '@/utils/LoadSvgIcon'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

const SidebarItem = ({ item, isLink = true }: any) => {
  const segment = useSelectedLayoutSegment()

  return (
    <>
      {isLink ? (
        <Link href={item.href}>
          <span
            className={`w-full flex flex-col items-center py-3 border-b border-center-image`}
          >
            <LoadSvgIcon
              name={item.icon}
              size={20}
              color={
                segment === item.href
                  ? 'var(--color-primary)'
                  : 'var(--color-captionDark)'
              }
              weight={1.5}
            />
            <p
              className={`text-xxs font-medium mt-1 ${
                segment === item.href
                  ? 'text-primary'
                  : 'text-captionDark dark:text-lightCaptionLight'
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
                : 'var(--color-captionDark)'
            }
            weight={1.5}
          />
        </span>
      )}
    </>
  )
}

export default SidebarItem
