import { IEducationProps } from '@/types/Types'
import {
  Card,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import EducationItem from '../components/EducationItem'
import { useRequest } from '@/services/axios/useRequest'
import { Keys } from '@/constants/Keys'
import { Paths } from '@/constants/Paths'

const TABLE_HEAD = ['عنوان', 'مدرک', 'کشور-شهر', 'عملکرد']

const EducationList = () => {
  const { data } = useRequest({
    queryKey: Keys.education.education,
    url: Paths.education.all,
  })

  return (
    <>
      <Card className="p-8 rounded-none flex justify-between items-center h-[100px]">
        <p className="text-titr text-[18px] font-bold">تحصیلات</p>
      </Card>

      <div className="p-8">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow className="bg-gray-400">
                {TABLE_HEAD?.map((item) => (
                  <TableCell key={item} className="text-right">
                    {item}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.educations?.map((item: IEducationProps) => (
                <EducationItem key={item._id} item={item} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  )
}

export default EducationList
