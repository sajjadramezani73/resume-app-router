import { QUERY_KEY } from '@/constants/constants'
import { getExperiences } from '@/services/queries'
import { IExperienceProps } from '@/types/Types'
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material'
import { useQuery } from 'react-query'
import ExperienceItem from './components/ExperienceItem'

const TABLE_HEAD = ['عنوان', 'شرکت', 'نوع فعالیت', 'عملکرد']

const ExperienceList = () => {
  const { data } = useQuery([QUERY_KEY.EXPERIENCES], getExperiences)

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
          {data?.experiences.map((item: IExperienceProps) => (
            <ExperienceItem key={item._id} item={item} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ExperienceList
