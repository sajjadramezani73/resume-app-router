import { useEducationActions } from '@/store/educationSlice'
import { TextField } from '@mui/material'

interface Props {
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Step1 = ({ onChangeHandler }: Props) => {
  const { education } = useEducationActions()

  return (
    <div className="grid grid-cols-2 gap-4">
      <TextField
        label="عنوان"
        variant="outlined"
        size="small"
        name="title.fa"
        value={education.addEducation.title.fa}
        onChange={onChangeHandler}
      />
      <TextField
        label="Title"
        variant="outlined"
        size="small"
        className="ltr"
        name="title.en"
        value={education.addEducation.title.en}
        onChange={onChangeHandler}
      />
      <TextField
        label="دانشگاه"
        variant="outlined"
        size="small"
        name="university.fa"
        value={education.addEducation.university.fa}
        onChange={onChangeHandler}
      />
      <TextField
        label="University"
        variant="outlined"
        size="small"
        className="ltr"
        name="university.en"
        value={education.addEducation.university.en}
        onChange={onChangeHandler}
      />
      <TextField
        label="آدرس"
        variant="outlined"
        size="small"
        name="location.fa"
        value={education.addEducation.location.fa}
        onChange={onChangeHandler}
      />
      <TextField
        label="Location"
        variant="outlined"
        size="small"
        className="ltr"
        name="location.en"
        value={education.addEducation.location.en}
        onChange={onChangeHandler}
      />
    </div>
  )
}

export default Step1
