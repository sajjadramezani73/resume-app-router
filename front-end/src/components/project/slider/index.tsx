'use client'

import { IImageProps } from '@/type/types'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import ConfirmModal from '@/components/modals/ConfirmModal'
import { useState } from 'react'
import GallerySlider from './GallerySlider'
import { useCurrentLocale } from '@/locales/client'

interface Props {
  images: IImageProps[]
}

const Slider = ({ images }: Props) => {
  const locale = useCurrentLocale()

  const [openGallerySlider, setOpenGallerySlider] = useState(false)
  const [imageIndex, setImageIndex] = useState<number>(0)

  const handleOpenModal = (index: number) => {
    setImageIndex(index)
    setOpenGallerySlider(true)
  }

  const handleCloseModal = () => {
    setImageIndex(0)
    setOpenGallerySlider(false)
  }

  return (
    <>
      <div className="w-full overflow-hidden">
        <Swiper
          spaceBetween={12}
          dir={locale === 'fa' ? 'rtl' : 'ltr'}
          grabCursor={true}
          slidesPerView={2}
          breakpoints={{
            480: { slidesPerView: 2.5 },
            600: { slidesPerView: 3 },
            650: { slidesPerView: 3.5 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 2.7 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3.7 },
          }}
        >
          {images?.map((item: IImageProps, index: number) => (
            <SwiperSlide key={item._id} onClick={() => handleOpenModal(index)}>
              <div className="w-full h-[200px] relative rounded-md overflow-hidden">
                <Image
                  src={item?.url}
                  alt={item?.name}
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <ConfirmModal
        options={{
          show: openGallerySlider,
          setShow: handleCloseModal,
        }}
      >
        <div className="bg-white w-full max-w-[90%] h-[90%] rounded-lg overflow-hidden">
          <GallerySlider images={images} initialSlide={imageIndex} />
        </div>
      </ConfirmModal>
    </>
  )
}

export default Slider
