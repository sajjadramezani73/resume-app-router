import { Paths } from '@/constants/Paths'
import { useMutate } from '@/services/axios/useRequest'
import PermMediaOutlinedIcon from '@mui/icons-material/PermMediaOutlined'
import { useRef, useState } from 'react'
import { toast } from 'sonner'
import { IImage } from '../type'
import { CircularProgress } from '@mui/material'

interface Props {
  handleImage: (image: IImage) => void
}

const SingleUpload = ({ handleImage }: Props) => {
  const inputFileRef = useRef<any>()

  const [selectedPath, setSelectedPath] = useState<any>('')

  // select file of computer for send to api
  const selectFileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      if (
        e.target.files[0].type === 'image/jpeg' ||
        e.target.files[0].type === 'image/png'
      ) {
        const reader = new FileReader()
        reader.onload = (e) => {
          setSelectedPath(e?.target?.result)
        }
        reader.readAsDataURL(e.target.files[0])
        handleUploadImage(e.target.files[0])
      } else {
        setSelectedPath('')
        toast.error('فرمت فایل ارسالی شما صحیح نمی باشد.')
      }
    }
  }

  const uploadImage = useMutate({
    method: 'post',
    url: Paths.upload.singleUpload,
    header: { headers: { 'Content-Type': 'multipart/form-data' } },
    successCallback(data) {
      toast.success('تصویر با موفقیت آپلود شد')
      handleImage(data.file)
    },
    errorCallback: () => {
      toast.error('مشکلی در ثبت درخواست شما به وجود آمده است')
      console.log('errrrrr')
    },
  })

  const handleUploadImage = async (img: File) => {
    const formData = new FormData()
    formData.append('image', img)

    uploadImage.mutate({
      query: formData,
    })
  }

  return (
    <>
      {uploadImage.isLoading ? (
        <div className="w-full h-full border border-dashed border-border rounded flex justify-center items-center overflow-hidden relative">
          <img
            src={selectedPath}
            alt=""
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
            <CircularProgress color="primary" size={30} />
          </div>
        </div>
      ) : (
        <>
          <div
            className="w-full h-full border border-dashed border-border rounded flex flex-col justify-center items-center gap-y-2 cursor-pointer"
            onClick={() => inputFileRef?.current?.click()}
          >
            <PermMediaOutlinedIcon />
            <p className="text-xs font-medium">انتخاب تصویر</p>
          </div>
          <input
            type="file"
            className="hidden"
            ref={inputFileRef}
            onChange={selectFileHandler}
          />
        </>
      )}
    </>
  )
}

export default SingleUpload
