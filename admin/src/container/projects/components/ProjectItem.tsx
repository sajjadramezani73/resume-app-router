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

const ProjectItem = ({ item }: { item: IProjectProps }) => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  console.log(item)

  const deleteExperience = useMutate({
    method: 'delete',
    url: Paths.experience.base,
    successCallback() {
      toast.success('سابقه کاری با موفقیت حذف شد')
      queryClient.invalidateQueries(Keys.experience.experience)
    },
    errorCallback: () => {
      toast.error('مشکلی در ثبت درخواست شما به وجود آمده است')
      console.log('errrrrr')
    },
  })

  const deleteExperienceHandler = async (id: string | undefined) => {
    // deleteExperience.mutate({ id })
  }

  const handleEdit = () => {
    navigate(`/dashboard/project/${item?._id}`)
  }

  return (
    <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
      <TableCell className="text-right">{item.title.fa}</TableCell>
      <TableCell className="text-right flex gap-2">
        {item?.skills?.map((skill) => (
          <Chip key={skill} label={skill} />
        ))}
      </TableCell>
      <TableCell className="text-right">
        <Tooltip title="حذف" arrow>
          <IconButton
            size="small"
            className="text-red-500"
            onClick={() => deleteExperienceHandler(item._id)}
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
