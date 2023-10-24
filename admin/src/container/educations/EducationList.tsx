import { useQuery } from 'react-query'
import { getEducations } from '@/services/queries'
import { QUERY_KEY } from '@/constants/constants'
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
import EducationItem from './EducationItem'

const TABLE_HEAD = ['عنوان', 'مدرک', 'کشور-شهر', 'عملکرد']

const EducationList = () => {
  const { data, isLoading } = useQuery([QUERY_KEY.EDUCATIONS], getEducations)
  console.log('data', data, isLoading)

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow className="bg-gray-400">
            <TableCell />
            {TABLE_HEAD.map((item) => (
              <TableCell key={item} align="right">
                {item}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.educations.map((item: IEducationProps) => (
            <EducationItem key={item._id} item={item} />
          ))}
          {/* {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default EducationList
