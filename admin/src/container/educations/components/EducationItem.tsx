import { Keys } from '@/constants/Keys'
import { Paths } from '@/constants/Paths'
import { useMutate } from '@/services/axios/useRequest'
import { IEducationProps } from '@/types/Types'
import DeleteIcon from '@mui/icons-material/Delete'
import DriveFileRenameOutlineRoundedIcon from '@mui/icons-material/DriveFileRenameOutlineRounded'
import { TableRow, TableCell, IconButton, Tooltip } from '@mui/material'
import { useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const EducationItem = ({ item }: { item: IEducationProps }) => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const deleteEducation = useMutate({
    method: 'delete',
    url: Paths.education.base,
    successCallback() {
      toast.success('سابقه تحصیلی با موفقیت حذف شد')
      queryClient.invalidateQueries(Keys.education.education)
    },
    errorCallback: () => {
      toast.error('مشکلی در ثبت درخواست شما به وجود آمده است')
      console.log('errrrrr')
    },
  })

  const deleteEducationHandler = async (id: string | undefined) => {
    deleteEducation.mutate({ id })
  }

  const handleEdit = () => {
    navigate(`/dashboard/education/${item?._id}`)
  }

  return (
    <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
      <TableCell className="text-right">{item.title.fa}</TableCell>
      <TableCell className="text-right">{item.grade.fa}</TableCell>
      <TableCell className="text-right">{item.location.fa}</TableCell>
      <TableCell className="text-right">
        <Tooltip title="حذف" arrow>
          <IconButton
            size="small"
            className="text-red-500"
            onClick={() => deleteEducationHandler(item._id)}
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

export default EducationItem
