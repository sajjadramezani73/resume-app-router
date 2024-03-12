export default function Loading() {
  return (
    <div className="h-full flex flex-col">
      <div className="pb-7 border-b">
        <div className="w-1/2 h-[31px] rounded bg-gray-100 animate-pulse"></div>
      </div>
      <div className="pt-4 flex-grow overflow-hidden overflow-y-auto no-scroll">
        <div className="flex flex-col gap-y-1">
          <div className="w-full h-[22px] rounded bg-gray-100 animate-pulse"></div>
          <div className="w-full h-[22px] rounded bg-gray-100 animate-pulse"></div>
          <div className="w-1/2 h-[22px] rounded bg-gray-100 animate-pulse"></div>
        </div>
        <div className="mt-12">
          <div className="w-full h-[200px] rounded bg-gray-100 animate-pulse"></div>
        </div>
        <div className="mt-12">
          <div className="w-1/3 h-[22px] rounded bg-gray-100 animate-pulse"></div>
          <div className="flex flex-col gap-y-1 mt-4">
            <div className="w-full h-[22px] rounded bg-gray-100 animate-pulse"></div>
            <div className="w-full h-[22px] rounded bg-gray-100 animate-pulse"></div>
            <div className="w-1/2 h-[22px] rounded bg-gray-100 animate-pulse"></div>
          </div>
          <div className="flex flex-col gap-y-1 mt-4">
            <div className="w-full h-[22px] rounded bg-gray-100 animate-pulse"></div>
            <div className="w-full h-[22px] rounded bg-gray-100 animate-pulse"></div>
            <div className="w-1/2 h-[22px] rounded bg-gray-100 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
