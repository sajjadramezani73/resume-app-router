import { degreeEducation } from '@/enums'
import { useEducationActions } from '@/store/educationSlice'
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material'

interface Props {
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
  onSelectHandler: (event: SelectChangeEvent) => void
}

const Step2 = ({ onChangeHandler, onSelectHandler }: Props) => {
  const { education } = useEducationActions()
  return (
    <div className="grid grid-cols-2 gap-4">
      <TextField
        type="number"
        label="تاریخ شروع"
        variant="outlined"
        size="small"
        name="dateStart.fa"
        value={education.addEducation.dateStart.fa}
        onChange={onChangeHandler}
      />
      <TextField
        type="number"
        label="Date Start"
        variant="outlined"
        size="small"
        className="ltr"
        name="dateStart.en"
        value={education.addEducation.dateStart.en}
        onChange={onChangeHandler}
      />
      <TextField
        type="number"
        label="تاریخ اتمام"
        variant="outlined"
        size="small"
        name="dateEnd.fa"
        value={education.addEducation.dateEnd.fa}
        onChange={onChangeHandler}
      />
      <TextField
        type="number"
        size="small"
        label="Date End"
        className="ltr"
        name="dateEnd.en"
        value={education.addEducation.dateEnd.en}
        onChange={onChangeHandler}
      />
      <FormControl fullWidth variant="outlined" size="small">
        <InputLabel>مدرک</InputLabel>
        <Select
          label="مدرک"
          name="grade.fa"
          value={education.addEducation.grade.fa}
          onChange={onSelectHandler}
        >
          {degreeEducation.persian.map((item: string) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth variant="outlined" size="small" className="ltr">
        <InputLabel>Grade</InputLabel>
        <Select
          label="Grade"
          name="grade.en"
          value={education.addEducation.grade.en}
          onChange={onSelectHandler}
        >
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
