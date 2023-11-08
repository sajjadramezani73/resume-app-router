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
        className="ltr"
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
        className="ltr"
      />
      <Field
        type="text"
        name="location.fa"
        as={TextField}
        size="small"
        label="آدرس"
      />
      <Field
        type="text"
        name="location.en"
        as={TextField}
        size="small"
        label="Location"
        className="ltr"
      />
    </div>
  )
}

export default Step1
