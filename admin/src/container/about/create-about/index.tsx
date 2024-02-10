import { gender } from '@/enums'
import { useAboutActions } from '@/store/aboutSlice'
import {
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'

const CreateAbout = () => {
  const { about, updateAddAbout, updateAddAboutOneProperty } = useAboutActions()

  console.log(about)

  // save data form in redux store
  const onChangeHandler = (e: { target: { name: string; value: string } }) => {
    const title = e.target.name.split('.')[0]
    const lang = e.target.name.split('.')[1]
    const obj = { name: title, amount: { [lang]: e.target.value } }
    updateAddAbout(obj)
  }

  return (
    <>
      <Card className="p-8 rounded-none flex justify-between items-center h-[100px]">
        <p className="text-titr text-[18px] font-bold">ویرایش اطلاعات شخصی</p>
      </Card>
      <div className="p-8">
        <Card className="p-8">
          <div className="grid grid-cols-2 gap-4">
            <TextField
              label="نام"
              variant="outlined"
              size="small"
              name="firstName.fa"
              value={about.addAbout.firstName.fa}
              onChange={onChangeHandler}
            />
            <TextField
              label="First Name"
              variant="outlined"
              size="small"
              className="ltr"
              name="firstName.en"
              value={about.addAbout.firstName.en}
              onChange={onChangeHandler}
            />
            <TextField
              label="نام خانوادگی"
              variant="outlined"
              size="small"
              name="lastName.fa"
              value={about.addAbout.lastName.fa}
              onChange={onChangeHandler}
            />
            <TextField
              label="Last Name"
              variant="outlined"
              size="small"
              className="ltr"
              name="lastName.en"
              value={about.addAbout.lastName.en}
              onChange={onChangeHandler}
            />
            <TextField
              label="شغل"
              variant="outlined"
              size="small"
              name="job.fa"
              value={about.addAbout.job.fa}
              onChange={onChangeHandler}
            />
            <TextField
              label="Job"
              variant="outlined"
              size="small"
              className="ltr"
              name="job.en"
              value={about.addAbout.job.en}
              onChange={onChangeHandler}
            />
            <TextField
              label="آدرس"
              variant="outlined"
              size="small"
              name="address.fa"
              value={about.addAbout.address.fa}
              onChange={onChangeHandler}
            />
            <TextField
              label="Address"
              variant="outlined"
              size="small"
              className="ltr"
              name="address.en"
              value={about.addAbout.address.en}
              onChange={onChangeHandler}
            />
            <div className="col-span-2">
              <TextField
                label="توضیحات"
                variant="outlined"
                size="small"
                className="w-full"
                name="bio.fa"
                multiline
                rows={4}
                value={about.addAbout.bio.fa}
                onChange={onChangeHandler}
              />
            </div>
            <div className="col-span-2">
              <TextField
                label="Bio"
                variant="outlined"
                size="small"
                className="ltr w-full"
                name="bio.en"
                multiline
                rows={4}
                value={about.addAbout.bio.en}
                onChange={onChangeHandler}
              />
            </div>
            <FormControl fullWidth variant="outlined" size="small">
              <InputLabel>جنسیت</InputLabel>
              <Select
                label="جنسیت"
                name="gender.fa"
                value={about.addAbout.gender.fa}
                onChange={onChangeHandler}
              >
                {gender.persian.map((item: string) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl
              fullWidth
              variant="outlined"
              size="small"
              className="ltr"
            >
              <InputLabel>Gender</InputLabel>
              <Select
                label="Gender"
                name="gender.en"
                value={about.addAbout.gender.en}
                onChange={onChangeHandler}
              >
                {gender.english.map((item: string) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              type="number"
              label="سن"
              variant="outlined"
              size="small"
              className="ltr"
              name="age"
              value={about.addAbout.age}
              onChange={(event) =>
                updateAddAboutOneProperty({ age: event.target.value })
              }
            />
            <TextField
              label="ایمیل"
              variant="outlined"
              size="small"
              className="ltr"
              name="email"
              value={about.addAbout.email}
              onChange={(event) =>
                updateAddAboutOneProperty({ email: event.target.value })
              }
            />
            <TextField
              label="شماره تماس"
              variant="outlined"
              size="small"
              className="ltr"
              name="phone"
              value={about.addAbout.phone}
              onChange={(event) =>
                updateAddAboutOneProperty({ phone: event.target.value })
              }
            />
          </div>
        </Card>
      </div>
    </>
  )
}

export default CreateAbout
