import { jobTimeExperience, skillExperience } from '@/enums'
import { useExperienceActions } from '@/store/experienceSlice'
import {
  Autocomplete,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material'
import { ChangeEvent, SyntheticEvent } from 'react'

interface Props {
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
  onSelectHandler: (event: SelectChangeEvent) => void
}

const Step2 = ({ onChangeHandler, onSelectHandler }: Props) => {
  const { experience, updateAddExperienceOneProperty } = useExperienceActions()

  const changeHandler = (
    _event: SyntheticEvent<Element, Event>,
    checked: boolean
  ) => {
    updateAddExperienceOneProperty({ dateEnd: { fa: '', en: '' } })
    updateAddExperienceOneProperty({ soFar: checked })
  }
  // React.ChangeEvent<HTMLInputElement>
  return (
    <div className="grid grid-cols-2 gap-4">
      <FormControl fullWidth variant="outlined" size="small">
        <InputLabel>ساعت کاری</InputLabel>
        <Select
          label="ساعت کاری"
          name="jobTime.fa"
          value={experience.addExperience.jobTime.fa}
          onChange={onSelectHandler}
        >
          {jobTimeExperience.persian.map((item: string) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth variant="outlined" size="small" className="ltr">
        <InputLabel>job time</InputLabel>
        <Select
          label="job time"
          name="jobTime.en"
          value={experience.addExperience.jobTime.en}
          onChange={onSelectHandler}
        >
          {jobTimeExperience.english.map((item: string) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="تاریخ شروع"
        variant="outlined"
        size="small"
        name="dateStart.fa"
        value={experience.addExperience.dateStart.fa}
        onChange={onChangeHandler}
      />
      <TextField
        label="Date Start"
        variant="outlined"
        size="small"
        className="ltr"
        name="dateStart.en"
        value={experience.addExperience.dateStart.en}
        onChange={onChangeHandler}
      />
      <TextField
        label="تاریخ اتمام"
        variant="outlined"
        size="small"
        name="dateEnd.fa"
        value={experience.addExperience.dateEnd.fa}
        onChange={onChangeHandler}
        disabled={experience.addExperience.soFar}
      />
      <TextField
        size="small"
        label="Date End"
        className="ltr"
        name="dateEnd.en"
        value={experience.addExperience.dateEnd.en}
        onChange={onChangeHandler}
        disabled={experience.addExperience.soFar}
      />
      <FormGroup className="col-span-2">
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="همچنان مشغول به کار هستم"
          onChange={changeHandler}
          checked={experience.addExperience.soFar}
        />
      </FormGroup>
      <TextField
        label="توضیحات"
        variant="outlined"
        size="small"
        name="description.fa"
        value={experience.addExperience.description.fa}
        onChange={onChangeHandler}
        multiline
        rows={4}
      />
      <TextField
        size="small"
        label="description"
        className="ltr"
        name="description.en"
        value={experience.addExperience.description.en}
        onChange={onChangeHandler}
        multiline
        rows={4}
      />
      <TextField
        label="سایت شرکت"
        variant="outlined"
        size="small"
        name="companyLink"
        value={experience.addExperience.companyLink}
        onChange={(e) =>
          updateAddExperienceOneProperty({ companyLink: e.target.value })
        }
      />
      <Autocomplete
        multiple
        size="small"
        options={skillExperience}
        getOptionLabel={(option) => option}
        defaultValue={experience.addExperience.skill}
        filterSelectedOptions
        renderInput={(params) => <TextField {...params} label="مهارت ها" />}
        onChange={(event, value) =>
          updateAddExperienceOneProperty({
            skill: [...value],
          })
        }
      />
    </div>
  )
}

export default Step2
