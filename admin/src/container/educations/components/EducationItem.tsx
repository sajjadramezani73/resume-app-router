import { IEducationProps } from '@/types/Types'
import DeleteIcon from '@mui/icons-material/Delete'
import DriveFileRenameOutlineRoundedIcon from '@mui/icons-material/DriveFileRenameOutlineRounded'
import { TableRow, TableCell, IconButton, Tooltip } from '@mui/material'

const EducationItem = ({ item }: { item: IEducationProps }) => {
  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell className="text-right">{item.title.fa}</TableCell>
        <TableCell className="text-right">{item.grade.fa}</TableCell>
        <TableCell className="text-right">{item.location.fa}</TableCell>
        <TableCell className="text-right">
          <Tooltip title="حذف" arrow>
            <IconButton size="small" className="text-red-500">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="ویرایش" arrow>
            <IconButton size="small" className="text-blue-500">
              <DriveFileRenameOutlineRoundedIcon />
            </IconButton>
          </Tooltip>
        </TableCell>
      </TableRow>
    </>
  )
}

export default EducationItem
