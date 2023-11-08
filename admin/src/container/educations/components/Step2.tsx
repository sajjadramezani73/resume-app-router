import { degreeEducation } from '@/enums'
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import { Field } from 'formik'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomizedSelectForFormik = ({ children, form, field, label }: any) => {
  const { name, value } = field
  const { setFieldValue } = form

  return (
    <Select
      name={name}
      value={value}
      label={label}
      onChange={(e) => {
        setFieldValue(name, e.target.value)
      }}
    >
      {children}
    </Select>
  )
}

const Step2 = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Field
        type="number"
        name="dateStart.fa"
        as={TextField}
        size="small"
        label="تاریخ شروع"
      />
      <Field
        type="number"
        name="dateStart.en"
        as={TextField}
        size="small"
        label="Date Start"
        className="ltr"
      />
      <Field
        type="number"
        name="dateEnd.fa"
        as={TextField}
        size="small"
        label="تاریخ اتمام"
      />
      <Field
        type="number"
        name="dateEnd.en"
        as={TextField}
        size="small"
        label="Date End"
        className="ltr"
      />
      <FormControl fullWidth variant="outlined" size="small">
        <InputLabel>مدرک</InputLabel>
        <Field
          name="grade.fa"
          component={CustomizedSelectForFormik}
          label="مدرک"
        >
          {degreeEducation.persian.map((item: string) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Field>
      </FormControl>
      <FormControl fullWidth variant="outlined" size="small">
        <InputLabel>مدرک</InputLabel>
        <Field
          name="grade.en"
          component={CustomizedSelectForFormik}
          label="Grade"
        >
          {degreeEducation.english.map((item: string) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Field>
      </FormControl>
    </div>
  )
}

export default Step2
