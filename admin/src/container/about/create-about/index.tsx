import { Paths } from '@/constants/Paths'
import { gender, socialsNetwork } from '@/enums'
import { useMutate } from '@/services/axios/useRequest'
import { useAboutActions } from '@/store/aboutSlice'
import SvgIcon from '@/utils/SvgIcon'
import {
  Button,
  Card,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { toast } from 'sonner'
import { ISocialNetworkProps } from '@/types/Types'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const CreateAbout = () => {
  const navigate = useNavigate()
  const { about, updateAddAbout, updateAddAboutOneProperty } = useAboutActions()

  console.log(about)

  const [disabled, setDisabled] = useState(false)

  // check for desabled button submit
  useEffect(() => {
    about.addAbout.firstName.fa === '' ||
    about.addAbout.firstName.en === '' ||
    about.addAbout.lastName.fa === '' ||
    about.addAbout.lastName.en === '' ||
    about.addAbout.job.fa === '' ||
    about.addAbout.job.en === '' ||
    about.addAbout.address.fa === '' ||
    about.addAbout.address.en === '' ||
    about.addAbout.bio.fa === '' ||
    about.addAbout.bio.en === '' ||
    about.addAbout.gender.fa === '' ||
    about.addAbout.gender.en === '' ||
    about.addAbout.age === '' ||
    about.addAbout.email === '' ||
    about.addAbout.phone === ''
      ? setDisabled(true)
      : setDisabled(false)
  }, [about.addAbout])

  // save data form in redux store
  const onChangeHandler = (e: { target: { name: string; value: string } }) => {
    const title = e.target.name.split('.')[0]
    const lang = e.target.name.split('.')[1]
    const obj = { name: title, amount: { [lang]: e.target.value } }
    updateAddAbout(obj)
  }

  // add new social network
  const handleAddSocialNetwork = () => {
    updateAddAboutOneProperty({
      socialsNetwork: [
        ...about.addAbout.socialsNetwork,
        { icon: '', link: '' },
      ],
    })
  }

  // update icon and link for social network item
  const handleSocialNetworkChange = (
    index: number,
    value: string,
    name: string
  ) => {
    const updatedSocialsNetwork: ISocialNetworkProps[] = [
      ...about.addAbout.socialsNetwork,
    ]

    if (name === 'link') {
      updatedSocialsNetwork[index] = {
        ...updatedSocialsNetwork[index],
        link: value,
      }
    } else if (name === 'icon') {
      updatedSocialsNetwork[index] = {
        ...updatedSocialsNetwork[index],
        icon: value,
      }
    }
    updateAddAboutOneProperty({ socialsNetwork: updatedSocialsNetwork })
  }

  // delete social network from list
  const handleDeleteSocialNetwork = (indexSocial: number) => {
    const filteredSocial = about.addAbout.socialsNetwork.filter(
      (_item, index) => index !== indexSocial
    )
    updateAddAboutOneProperty({ socialsNetwork: filteredSocial })
  }

  const editAbout = useMutate({
    method: 'post',
    url: Paths.about.base,
    successCallback() {
      toast.success('درخواست شما با موفقیت ثبت شد')
      // cache.invalidateQueries(Keys.project.project)
      // handleReset()
      navigate('/dashboard')
    },
    errorCallback: () => {
      toast.error('مشکلی در ثبت درخواست شما به وجود آمده است')
      console.log('errrrrr')
    },
  })

  const handleSubmit = () => {
    editAbout.mutate({
      query: {
        ...about.addAbout,
      },
    })
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
            <div className="col-span-2">
              <div className="grid grid-cols-2 gap-x-4 gap-y-3 ltr">
                {about?.addAbout.socialsNetwork.map((item, index) => (
                  <div className="flex items-center gap-x-0.5">
                    <div className="flex-grow flex items-center gap-x-0.5 border border-solid border-border rounded">
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={item.icon}
                        className="ltr"
                        size="small"
                        sx={{
                          '& .MuiOutlinedInput-notchedOutline': {
                            borderWidth: 0,
                          },
                          '& .MuiSelect-select': {
                            display: 'flex',
                          },
                        }}
                        onChange={(e) =>
                          handleSocialNetworkChange(
                            index,
                            e.target.value,
                            'icon'
                          )
                        }
                      >
                        {socialsNetwork.map((icon) => (
                          <MenuItem value={icon} className="ltr">
                            <SvgIcon
                              name={icon}
                              size={20}
                              color="var(--color-titr)"
                            />
                          </MenuItem>
                        ))}
                      </Select>
                      <input
                        type="text"
                        value={item?.link}
                        className="w-full border-none outline-none"
                        onChange={(e) =>
                          handleSocialNetworkChange(
                            index,
                            e.target.value,
                            'link'
                          )
                        }
                      />
                    </div>
                    <IconButton
                      size="small"
                      onClick={() => handleDeleteSocialNetwork(index)}
                    >
                      <CloseIcon />
                    </IconButton>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Button
                  type="button"
                  onClick={handleAddSocialNetwork}
                  variant="contained"
                >
                  افزودن شبکه اجتماعی جدید
                </Button>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <Button
              variant="contained"
              disabled={disabled}
              onClick={handleSubmit}
            >
              ارسال
            </Button>
          </div>
        </Card>
      </div>
    </>
  )
}

export default CreateAbout
