import { Keys } from '@/constants/Keys'
import { Paths } from '@/constants/Paths'
import { useRequest } from '@/services/axios/useRequest'
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
import ProjectItem from '../components/ProjectItem'
import { IProjectProps } from '@/types/Types'

const TABLE_HEAD = ['عنوان', 'فعال', 'تکنولوژی', 'عملکرد']

const ProjectList = () => {
  const { data } = useRequest({
    queryKey: Keys.project.project,
    url: Paths.project.all,
  })

  return (
    <>
      <Card className="p-8 rounded-none flex justify-between items-center h-[100px]">
        <p className="text-titr text-[18px] font-bold">پروژه ها</p>
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
              {data?.projects.map((item: IProjectProps) => (
                <ProjectItem key={item._id} item={item} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  )
}

export default ProjectList
