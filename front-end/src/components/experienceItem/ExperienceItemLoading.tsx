import React from 'react'

const ExperienceItemLoading = () => {
  return (
    <>
      {/* show in md device */}
      <div className="w-full group hidden md:flex">
        <div className="w-44 min-w-[176px] text-end">
          <div className="flex justify-end">
            <div className="w-16 h-5 rounded-xs bg-gray-100 dark:bg-gray-50/20 animate-pulse"></div>
            <p className="text-caption-light px-1">-</p>
            <div className="w-16 h-5 rounded-xs bg-gray-100 dark:bg-gray-50/20 animate-pulse"></div>
          </div>
          <div className="w-16 h-5 rounded-xs bg-gray-100 dark:bg-gray-50/20 animate-pulse pt-0.5 ms-auto"></div>
        </div>
        <div className="border-r relative mx-6">
          <span className="absolute top-1.5 left-1/2 -translate-x-1/2 w-[10px] h-[10px] bg-white  rounded-full border-2 border-gray-300 ring-[5px] ring-gray-100 dark:ring-gray-50/20 animate-pulse"></span>
        </div>
        <div className="pb-7 group-last:pb-0 w-full">
          <div className="w-36 h-5 rounded-xs bg-gray-100 dark:bg-gray-50/20 animate-pulse"></div>
          <div className="w-full h-5 rounded-xs bg-gray-100 dark:bg-gray-50/20 animate-pulse mt-2"></div>
          <div className="w-1/2 h-5 rounded-xs bg-gray-100 dark:bg-gray-50/20 animate-pulse mt-2"></div>
        </div>
      </div>
      {/* show in small devices */}
      <div className="w-full flex md:hidden group">
        <div className="w-fit border-r relative mx-6 ms-2.5 md:ms-6">
          <span className="absolute top-1.5 left-1/2 -translate-x-1/2 w-[10px] h-[10px] bg-white  rounded-full border-2 border-gray-300 ring-[5px] ring-gray-100 dark:ring-gray-50/20 animate-pulse"></span>
        </div>
        <div className="grow">
          <div className="md:w-44 md:min-w-[176px] md:text-end">
            <div className="flex justify-start">
              <div className="w-16 h-5 rounded-xs bg-gray-100 dark:bg-gray-50/20 animate-pulse"></div>
              <p className="text-caption-light px-1">-</p>
              <div className="w-16 h-5 rounded-xs bg-gray-100 dark:bg-gray-50/20 animate-pulse"></div>
            </div>
            <div className="w-16 h-5 rounded-xs bg-gray-100 dark:bg-gray-50/20 animate-pulse pt-0.5 me-auto"></div>
          </div>
          <div className="pb-7 pt-3 group-last:pb-0 w-full">
            <div className="w-36 h-5 rounded-xs bg-gray-100 dark:bg-gray-50/20 animate-pulse"></div>
            <div className="w-full h-5 rounded-xs bg-gray-100 dark:bg-gray-50/20 animate-pulse mt-2"></div>
            <div className="w-1/2 h-5 rounded-xs bg-gray-100 dark:bg-gray-50/20 animate-pulse mt-2"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ExperienceItemLoading
