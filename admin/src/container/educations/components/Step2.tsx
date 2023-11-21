import { degreeEducation } from '@/enums'
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'

const Step2 = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <TextField
        type="number"
        label="تاریخ شروع"
        variant="outlined"
        size="small"
      />
      <TextField
        type="number"
        label="Date Start"
        variant="outlined"
        size="small"
        className="ltr"
      />
      <TextField
        type="number"
        label="تاریخ اتمام"
        variant="outlined"
        size="small"
      />
      <TextField type="number" size="small" label="Date End" className="ltr" />
      <FormControl fullWidth variant="outlined" size="small">
        <InputLabel>مدرک</InputLabel>
        <Select label="مدرک">
          {degreeEducation.persian.map((item: string) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth variant="outlined" size="small" className="ltr">
        <InputLabel>Grade</InputLabel>
        <Select label="Grade">
          {degreeEducation.english.map((item: string) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default Step2
