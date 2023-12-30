import { Keys } from '@/constants/Keys'
import { Paths } from '@/constants/Paths'
import { useMutate } from '@/services/axios/useRequest'
import { useEducationActions } from '@/store/educationSlice'
import { IEducationProps } from '@/types/Types'
import DeleteIcon from '@mui/icons-material/Delete'
import DriveFileRenameOutlineRoundedIcon from '@mui/icons-material/DriveFileRenameOutlineRounded'
import {
  TableRow,
  TableCell,
  IconButton,
  Tooltip,
  Alert,
  Snackbar,
} from '@mui/material'
import { useState } from 'react'
import { useQueryClient } from 'react-query'

const EducationItem = ({ item }: { item: IEducationProps }) => {
  const { title, university, location, dateStart, dateEnd, grade } = item
  const { updateEditEducation } = useEducationActions()
  const queryClient = useQueryClient()
  const [openAlert, setOpenAlert] = useState({
    success: false,
    error: false,
  })

  const handleClose = () => {
    setOpenAlert({ success: false, error: false })
  }

  const deleteEducation = useMutate({
    method: 'delete',
    url: Paths.education.base,
    successCallback() {
      // message.success(t('messages.success_delete'));
      queryClient.invalidateQueries(Keys.education.education)
      // handleCancel()
    },
  })

  const deleteEducationHandler = async (id: string | undefined) => {
    // const result = await deleteEducation({ id: id })
    // console.log(result)

    // if (result.success === 1) {
    //   setOpenAlert({ success: true, error: false })
    //   queryClient.invalidateQueries(QUERY_KEY.EDUCATIONS)
    // } else {
    //   setOpenAlert({ success: false, error: true })
    // }

    deleteEducation.mutate({ id })
  }

  const handleEdit = () => {
    updateEditEducation({
      title,
      university,
      location,
      dateStart,
      dateEnd,
      grade,
    })
  }

  return (
    <>
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
              disabled
            >
              <DriveFileRenameOutlineRoundedIcon />
            </IconButton>
          </Tooltip>
        </TableCell>
      </TableRow>

      <Snackbar
        open={openAlert.success}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" variant="filled">
          سابقه تحصیلی با موفقیت حذف شد
        </Alert>
      </Snackbar>
      <Snackbar
        open={openAlert.error}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error" variant="filled">
          مشکلی پیش آمده است. مجددا امتحان کنید
        </Alert>
      </Snackbar>
    </>
  )
}

export default EducationItem
