import { jobTypeExperience } from '@/enums'
import { useExperienceActions } from '@/store/experienceSlice'
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

const Step1 = ({ onChangeHandler, onSelectHandler }: Props) => {
  const { experience } = useExperienceActions()

  return (
    <div className="grid grid-cols-2 gap-4">
      <TextField
        label="عنوان"
        variant="outlined"
        size="small"
        name="title.fa"
        value={experience.addExperience.title.fa}
        onChange={onChangeHandler}
      />
      <TextField
        label="Title"
        variant="outlined"
        size="small"
        className="ltr"
        name="title.en"
        value={experience.addExperience.title.en}
        onChange={onChangeHandler}
      />
      <TextField
        label="شرکت"
        variant="outlined"
        size="small"
        name="company.fa"
        value={experience.addExperience.company.fa}
        onChange={onChangeHandler}
      />
      <TextField
        label="company"
        variant="outlined"
        size="small"
        className="ltr"
        name="company.en"
        value={experience.addExperience.company.en}
        onChange={onChangeHandler}
      />
      <FormControl fullWidth variant="outlined" size="small">
        <InputLabel>نوع فعالیت</InputLabel>
        <Select
          label="نوع فعالیت"
          name="jobType.fa"
          value={experience.addExperience.jobType.fa}
          onChange={onSelectHandler}
        >
          {jobTypeExperience.persian.map((item: string) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth variant="outlined" size="small" className="ltr">
        <InputLabel>job type</InputLabel>
        <Select
          label="job type"
          name="jobType.fa"
          value={experience.addExperience.jobType.en}
          onChange={onSelectHandler}
        >
          {jobTypeExperience.english.map((item: string) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default Step1
