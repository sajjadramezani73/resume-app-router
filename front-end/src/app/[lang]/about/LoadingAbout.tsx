import AboutItemLoading from '@/components/aboutItem/AboutItemLoading'
import React from 'react'

const LoadingAbout = () => {
  return (
    <div className="grid gris-cols-1 md:grid-cols-2">
      <div
        className={`flex flex-col gap-y-2.5 pt-7 md:border-e md:pe-6 border-vertical-image`}
      >
        <div className="w-full h-6 bg-gray-100 rounded-sm animate-pulse"></div>
        <div className="w-full h-6 bg-gray-100 rounded-sm animate-pulse"></div>
        <div className="w-full h-6 bg-gray-100 rounded-sm animate-pulse"></div>
        <div className="w-full h-6 bg-gray-100 rounded-sm animate-pulse"></div>
        <div className="w-1/2 h-6 bg-gray-100 rounded-sm animate-pulse"></div>
      </div>
      <div className="pt-7 md:ps-6 grid gap-y-3">
        <AboutItemLoading />
        <AboutItemLoading />
        <AboutItemLoading />
        <AboutItemLoading />
      </div>
    </div>
  )
}

export default LoadingAbout
