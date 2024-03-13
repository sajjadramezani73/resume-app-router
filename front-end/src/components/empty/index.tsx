import Image from 'next/image'
import empty from '../../../public/assets/image/empty.svg'
import { getI18n } from '@/locales/server'

const Empty = async () => {
  const t = await getI18n()
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-y-3">
      <div className="w-full max-w-[200px] aspect-[1/0.7] relative">
        <Image src={empty} fill alt="empty" />
      </div>
      <p className="text-xs text-captionDark dark:text-lightCaptionLight">
        {t('empty')}
      </p>
    </div>
  )
}

export default Empty
