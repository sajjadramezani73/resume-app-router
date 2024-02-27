import { TextField } from '@mui/material'
import backgroundLogin from '../assets/images/login-image.png'
import { LoadingButton } from '@mui/lab'

const Login = () => {
  return (
    <div className="w-full h-full overflow-hidden px-6 xl:px-[100px] py-[60px] flex justify-center bg-[url(src/assets/images/background.png)] bg-cover">
      <div className="w-full max-w-[400px] lg:w-fit lg:max-w-none bg-white flex justify-center items-stretch rounded-2xl p-3">
        <div className="flex flex-col justify-center w-full lg:w-[350px] xl-w-[380px] lg:pe-3">
          <div className="px-3 lg:px-6 grid grid-cols-1 gap-y-6">
            <p className="text-center text-[20px] font-semibold text-titr mb-6">
              ورود به حساب کاربری
            </p>
            <TextField
              label="نام کاربری"
              variant="outlined"
              className="w-full"
              size="small"
              // value={project.addProject.title.fa}
              // onChange={onChangeHandler}
            />
            <TextField
              type="password"
              label="رمز عبور"
              variant="outlined"
              className="w-full"
              size="small"
              // value={project.addProject.title.fa}
              // onChange={onChangeHandler}
            />
            <LoadingButton loading={false} variant="contained">
              ورود
            </LoadingButton>
          </div>
        </div>
        <div className="hidden lg:flex">
          <img
            src={backgroundLogin}
            alt=""
            className="lg:w-[350px] xl:w-[400px] 2xl:w-[450px] object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  )
}

export default Login
