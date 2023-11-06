import { TextField } from '@mui/material'
import { Field } from 'formik'

const Step2 = () => {
  return (
    <div>
      <Field type="text" name="title.en" as={TextField} label="ssdf" />
    </div>
  )
}

export default Step2
