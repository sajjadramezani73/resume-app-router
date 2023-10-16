import { useQuery } from 'react-query'
import { getEducations } from '@/services/queries'
import { QUERY_KEY } from '@/constants/constants'
import SvgIcon from '@/utils/SvgIcon'
import { IEducationProps } from '@/types/Types'
import { useState } from 'react'

const TABLE_HEAD = ['عنوان', 'مدرک', 'کشور-شهر', 'عملکرد']

const EducationList = () => {
  const { data, isLoading } = useQuery([QUERY_KEY.EDUCATIONS], getEducations)
  console.log('data', data, isLoading)

  const [educationItem, setEducationItem] = useState<IEducationProps | null>(
    null
  )
  console.log('educationItem', educationItem)

  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(!open)

  return (
    <>
      {/* <Card className="w-full overflow-hidden">
        <table className="w-full min-w-max table-auto">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 text-right"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.educations?.map((item: IEducationProps, index: number) => {
              const isLast = index === data?.educations.length - 1
              const classes = isLast
                ? 'p-4'
                : 'p-4 border-b border-blue-gray-50'

              return (
                <tr key={item._id}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item.title.fa}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item.grade.fa}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item.location.fa}
                    </Typography>
                  </td>
                  <td className={`${classes} flex gap-x-1`}>
                    <Tooltip
                      content={
                        <Typography color="white" className="text-xxs">
                          ویرایش
                        </Typography>
                      }
                      className=""
                    >
                      <IconButton color="blue" size="sm">
                        <SvgIcon name="edit" size={16} color="#fff" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip
                      content={
                        <Typography color="white" className="text-xxs">
                          حذف
                        </Typography>
                      }
                      className=""
                    >
                      <IconButton color="red" size="sm">
                        <SvgIcon name="trash" size={16} color="#fff" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip
                      content={
                        <Typography color="white" className="text-xxs">
                          مشاهده
                        </Typography>
                      }
                      className=""
                    >
                      <IconButton
                        color="green"
                        size="sm"
                        onClick={() => {
                          handleOpen()
                          setEducationItem(item)
                        }}
                      >
                        <SvgIcon name="eye" size={18} color="#fff" />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </Card>

      <Dialog
        className="overflow-hidden"
        open={open}
        handler={() => {
          handleOpen()
          setEducationItem(null)
        }}
        size="lg"
      >
        <DialogBody
          className="p-8 grid grid-cols-2 gap-x-8 gap-y-4 ltr"
          divider
        >
          <div className="col-auto">
            <Input
              value={educationItem?.title.en}
              className=""
              disabled
              crossOrigin={undefined}
            />
          </div>
          <div className="col-auto">
            <Input
              value={educationItem?.title.fa}
              disabled
              className="rtl"
              crossOrigin={undefined}
            />
          </div>
          <div className="col-auto">
            <Input
              value={educationItem?.university.en}
              className=""
              disabled
              crossOrigin={undefined}
            />
          </div>
          <div className="col-auto">
            <Input
              value={educationItem?.university.fa}
              disabled
              className="rtl"
              crossOrigin={undefined}
            />
          </div>
          <div className="col-auto">
            <Input
              value={educationItem?.location.en}
              className=""
              disabled
              crossOrigin={undefined}
            />
          </div>
          <div className="col-auto">
            <Input
              value={educationItem?.location.fa}
              disabled
              className="rtl"
              crossOrigin={undefined}
            />
          </div>
          <div className="col-auto">
            <Input
              value={educationItem?.dateStart.en}
              className=""
              disabled
              crossOrigin={undefined}
            />
          </div>
          <div className="col-auto">
            <Input
              value={educationItem?.dateStart.fa}
              disabled
              className="rtl"
              crossOrigin={undefined}
            />
          </div>
          <div className="col-auto">
            <Input
              value={educationItem?.dateEnd.en}
              className=""
              disabled
              crossOrigin={undefined}
            />
          </div>
          <div className="col-auto">
            <Input
              value={educationItem?.dateEnd.fa}
              disabled
              className="rtl"
              crossOrigin={undefined}
            />
          </div>
          <div className="col-auto">
            <Input
              value={educationItem?.grade.en}
              className=""
              disabled
              crossOrigin={undefined}
            />
          </div>
          <div className="col-auto">
            <Input
              value={educationItem?.grade.fa}
              disabled
              className="rtl"
              crossOrigin={undefined}
            />
          </div>
        </DialogBody>
        <DialogFooter className="gap-x-3">
          <Button
            variant="filled"
            color="red"
            size="sm"
            onClick={() => {
              handleOpen()
              setEducationItem(null)
            }}
          >
            <p>بستن</p>
          </Button>
          <Button variant="filled" className="bg-primary" size="sm">
            <p>ویرایش</p>
          </Button>
        </DialogFooter>
      </Dialog> */}
    </>
  )
}

export default EducationList
