import { IExperienceProps } from '@/types/Types'
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Card,
} from '@mui/material'
import ExperienceItem from '../components/ExperienceItem'
import { Keys } from '@/constants/Keys'
import { Paths } from '@/constants/Paths'
import { useRequest } from '@/services/axios/useRequest'

const TABLE_HEAD = ['عنوان', 'شرکت', 'نوع فعالیت', 'عملکرد']

const ExperienceList = () => {
  const { data } = useRequest({
    queryKey: Keys.experience.experience,
    url: Paths.experience.all,
  })
  return (
    <>
      <Card className="p-8 rounded-none flex justify-between items-center h-[100px]">
        <p className="text-titr text-[18px] font-bold">سابقه کاری</p>
      </Card>
      <div className="p-8">
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
      </div>
    </>
  )
}

export default ExperienceList
