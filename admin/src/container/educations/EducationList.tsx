import { useQuery } from 'react-query'
import { Card, IconButton, Tooltip, Typography } from '@material-tailwind/react'
import { getEducations } from '@/services/queries'
import { QUERY_KEY } from '@/constants/constants'
import SvgIcon from '@/utils/SvgIcon'
import { IEducationProps } from '@/types/Types'

const TABLE_HEAD = ['عنوان', 'مدرک', 'کشور-شهر', 'عملکرد']

const EducationList = () => {
  const { data, isLoading } = useQuery([QUERY_KEY.EDUCATIONS], getEducations)
  console.log('data', data, isLoading)
  return (
    <Card className="w-full overflow-hidden">
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
            const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50'

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
                    <IconButton color="green" size="sm">
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
  )
}

export default EducationList
