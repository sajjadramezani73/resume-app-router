'use client'

import { IImageProps } from '@/type/types'
import { Swiper, SwiperSlide } from 'swiper/react'
import Navigation from 'swiper'
import Image from 'next/image'

interface Props {
  images: IImageProps[]
}

const Slider = ({ images }: Props) => {
  return (
    <div className="w-full overflow-hidden">
      <Swiper
        spaceBetween={12}
        dir="rtl"
        className="vertical-swiper"
        grabCursor={true}
        // modules={[Navigation]}
        // navigation={true}
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
        {images?.map((item: IImageProps) => (
          <SwiperSlide key={item._id}>
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
  )
}

export default Slider
