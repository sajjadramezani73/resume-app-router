import { QUERY_KEY } from '@/constants/constants'
import { deleteEducation } from '@/services/queries'
import { useEducationActions } from '@/store/educationSlice'
import { IExperienceProps } from '@/types/Types'
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

const ExperienceItem = ({ item }: { item: IExperienceProps }) => {
  const {
    _id,
    title,
    company,
    jobType,
    jobTime,
    dateStart,
    dateEnd,
    description,
    companyLink,
    skill,
  } = item
  // const { updateEducation, updateEditEducation } = useEducationActions()
  // const queryClient = useQueryClient()
  const [openAlert, setOpenAlert] = useState({
    success: false,
    error: false,
  })

  const handleClose = () => {
    setOpenAlert({ success: false, error: false })
  }

  const deleteExperienceHandler = async (id: string | undefined) => {
    // const result = await deleteEducation({ id: id })
    // console.log(result)
    // if (result.success === 1) {
    //   setOpenAlert({ success: true, error: false })
    //   queryClient.invalidateQueries(QUERY_KEY.EDUCATIONS)
    // } else {
    //   setOpenAlert({ success: false, error: true })
    // }
  }

  const handleEdit = () => {
    // updateEditEducation({
    //   title,
    //   university,
    //   location,
    //   dateStart,
    //   dateEnd,
    //   grade,
    // })
    // updateEducation({ showForm: true })
  }

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell className="text-right">{title.fa}</TableCell>
        <TableCell className="text-right">{company.fa}</TableCell>
        <TableCell className="text-right">{jobType.fa}</TableCell>
        <TableCell className="text-right">
          <Tooltip title="حذف" arrow>
            <IconButton
              size="small"
              className="text-red-500"
              onClick={() => deleteExperienceHandler(_id)}
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
          سابقه شغلی با موفقیت حذف شد
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

export default ExperienceItem
