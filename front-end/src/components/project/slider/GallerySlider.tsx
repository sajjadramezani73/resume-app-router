'use client'
import { IImageProps } from '@/type/types'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'

interface Props {
  images: IImageProps[]
  initialSlide?: number
}

const GallerySlider = ({ images, initialSlide = 0 }: Props) => {
  return (
    <Swiper
      loop={true}
      spaceBetween={10}
      navigation={true}
      pagination={{
        type: 'fraction',
      }}
      modules={[Navigation]}
      className="w-full h-full common-swiper py-10"
      initialSlide={initialSlide}
    >
      {images.map((item) => {
        return (
          <SwiperSlide key={item._id} className="relative">
            <Image
              src={item?.url}
              alt={item?.name}
              fill
              className="object-contain"
            />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default GallerySlider
