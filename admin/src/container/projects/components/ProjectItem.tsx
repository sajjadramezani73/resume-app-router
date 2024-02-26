import { Keys } from '@/constants/Keys'
import { Paths } from '@/constants/Paths'
import { useMutate } from '@/services/axios/useRequest'
import { IProjectProps } from '@/types/Types'
import { TableRow, TableCell, Tooltip, IconButton, Chip } from '@mui/material'
import { useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import DeleteIcon from '@mui/icons-material/Delete'
import DriveFileRenameOutlineRoundedIcon from '@mui/icons-material/DriveFileRenameOutlineRounded'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import TaskAltIcon from '@mui/icons-material/TaskAlt'
import { red } from '@mui/material/colors'

const ProjectItem = ({ item }: { item: IProjectProps }) => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const deleteProject = useMutate({
    method: 'delete',
    url: Paths.project.base,
    successCallback() {
      toast.success('پروژه با موفقیت حذف شد')
      queryClient.invalidateQueries(Keys.project.project)
    },
    errorCallback: () => {
      toast.error('مشکلی در ثبت درخواست شما به وجود آمده است')
      console.log('errrrrr')
    },
  })

  const deleteProjectHandler = async (id: string | undefined) => {
    deleteProject.mutate({ id })
  }

  const handleEdit = () => {
    navigate(`/dashboard/project/${item?._id}`)
  }

  return (
    <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
      <TableCell className="text-right">{item.title.fa}</TableCell>
      <TableCell className="text-right">
        {item.isActive ? (
          <TaskAltIcon color="success" />
        ) : (
          <HighlightOffIcon sx={{ color: red[500] }} />
        )}
      </TableCell>
      <TableCell className="text-right">
        {item?.skills?.map((skill) => (
          <Chip key={skill} label={skill} className="ml-2 mb-1" />
        ))}
      </TableCell>
      <TableCell className="text-right">
        <Tooltip title="حذف" arrow>
          <IconButton
            size="small"
            className="text-red-500"
            onClick={() => deleteProjectHandler(item._id)}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="ویرایش" arrow>
          <IconButton
            size="small"
            className="text-blue-500"
            onClick={handleEdit}
          >
            <DriveFileRenameOutlineRoundedIcon />
          </IconButton>
        </Tooltip>
      </TableCell>
    </TableRow>
  )
}

export default ProjectItem
