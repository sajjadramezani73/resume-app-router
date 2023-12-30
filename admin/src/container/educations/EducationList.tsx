import { IEducationProps } from '@/types/Types'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import EducationItem from './components/EducationItem'
import { useRequest } from '@/services/axios/useRequest'
import { Keys } from '@/constants/keys'
import { Paths } from '@/constants/Paths'

const TABLE_HEAD = ['عنوان', 'مدرک', 'کشور-شهر', 'عملکرد']

const EducationList = () => {
  const { data } = useRequest({
    queryKey: Keys.education.education,
    url: Paths.education.all,
  })

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow className="bg-gray-400">
            {TABLE_HEAD.map((item) => (
              <TableCell key={item} className="text-right">
                {item}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.educations.map((item: IEducationProps) => (
            <EducationItem key={item._id} item={item} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default EducationList
