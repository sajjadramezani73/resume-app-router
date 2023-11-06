import { TextField } from '@mui/material'
import { Field } from 'formik'

const Step1 = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Field
        type="text"
        name="title.fa"
        as={TextField}
        size="small"
        label="عنوان"
      />
      <Field
        type="text"
        name="title.en"
        as={TextField}
        size="small"
        label="Title"
      />
      <Field
        type="text"
        name="university.fa"
        as={TextField}
        size="small"
        label="دانشگاه"
      />
      <Field
        type="text"
        name="university.en"
        as={TextField}
        size="small"
        label="University"
      />
    </div>
  )
}

export default Step1
