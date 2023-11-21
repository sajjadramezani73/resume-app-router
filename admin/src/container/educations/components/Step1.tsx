import { TextField } from '@mui/material'

const Step1 = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <TextField label="عنوان" variant="outlined" size="small" />
      <TextField
        label="Title"
        variant="outlined"
        size="small"
        className="ltr"
      />
      <TextField label="دانشگاه" variant="outlined" size="small" />
      <TextField
        label="University"
        variant="outlined"
        size="small"
        className="ltr"
      />
      <TextField label="آدرس" variant="outlined" size="small" />
      <TextField
        label="Location"
        variant="outlined"
        size="small"
        className="ltr"
      />
    </div>
  )
}

export default Step1
