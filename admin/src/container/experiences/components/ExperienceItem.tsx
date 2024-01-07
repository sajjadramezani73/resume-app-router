import { Keys } from '@/constants/Keys'
import { Paths } from '@/constants/Paths'
import { useMutate } from '@/services/axios/useRequest'
import { IExperienceProps } from '@/types/Types'
import DeleteIcon from '@mui/icons-material/Delete'
import DriveFileRenameOutlineRoundedIcon from '@mui/icons-material/DriveFileRenameOutlineRounded'
import { TableRow, TableCell, IconButton, Tooltip } from '@mui/material'
import { useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const ExperienceItem = ({ item }: { item: IExperienceProps }) => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

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
    deleteExperience.mutate({ id })
  }

  const handleEdit = () => {
    navigate(`/dashboard/experience/${item?._id}`)
  }

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell className="text-right">{item.title.fa}</TableCell>
        <TableCell className="text-right">{item.company.fa}</TableCell>
        <TableCell className="text-right">{item.jobType.fa}</TableCell>
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
    </>
  )
}

export default ExperienceItem
