import { Keys } from '@/constants/Keys'
import { Paths } from '@/constants/Paths'
import { useRequest } from '@/services/axios/useRequest'
import { Button, Card } from '@mui/material'
import UserAvatar from '../components/avatar'
import SvgIcon from '@/utils/SvgIcon'
import { Link } from 'react-router-dom'
import { ISocialNetworkProps } from '@/types/Types'

const AboutList = () => {
  const { data } = useRequest({
    queryKey: Keys.about.about,
    url: Paths.about.all,
  })

  return (
    <>
      <Card className="p-8 rounded-none flex justify-between items-center h-[100px]">
        <p className="text-titr text-[18px] font-bold">درباره من</p>
        <Link to="/dashboard/create-about">
          <Button variant="contained">
            {data?.aboutMe && Object.keys(data?.aboutMe).length > 0
              ? 'ویرایش اطلاعات'
              : 'افزودن اطلاعات'}
          </Button>
        </Link>
      </Card>
      <div className="p-8">
        <Card className="p-8">
          {data?.aboutMe && Object.keys(data?.aboutMe).length > 0 ? (
            <div className="flex flex-col gap-x-4">
              <div className="flex justify-center items-center">
                <UserAvatar
                  avatar={data?.aboutMe?.avatar}
                  gender={data?.aboutMe?.gender}
                />
              </div>
              <div className="border-t porder-x-0 border-b-0 border-solid border-border my-8"></div>
              <div className="grid grid-cols-3 gap-x-2 gap-y-4">
                <div className="col-span-1">
                  <p>
                    {data?.aboutMe?.firstName?.fa +
                      ' ' +
                      data?.aboutMe?.lastName?.fa}
                  </p>
                </div>
                <div className="col-span-1">
                  <p>{data?.aboutMe?.job?.fa}</p>
                </div>
                <div className="col-span-1">
                  <p>{data?.aboutMe?.address?.fa}</p>
                </div>
                <div className="col-span-1">
                  <p>{data?.aboutMe?.gender?.fa}</p>
                </div>
                <div className="col-span-1">
                  <p>{data?.aboutMe?.age + ' ' + 'سال'}</p>
                </div>
                <div className="col-span-1">
                  <p>{'0' + data?.aboutMe?.phone}</p>
                </div>
                <div className="col-span-3">
                  <p>{data?.aboutMe?.bio?.fa}</p>
                </div>
              </div>
              <div className="border-t porder-x-0 border-b-0 border-solid border-border my-8"></div>
              <div className="grid grid-cols-3 gap-x-2 gap-y-4 ltr">
                <div className="col-span-1">
                  <p className="font-roboto">
                    {data?.aboutMe?.firstName?.en +
                      ' ' +
                      data?.aboutMe?.lastName?.en}
                  </p>
                </div>
                <div className="col-span-1">
                  <p className="font-roboto">{data?.aboutMe?.job?.en}</p>
                </div>
                <div className="col-span-1">
                  <p className="font-roboto">{data?.aboutMe?.address?.en}</p>
                </div>
                <div className="col-span-1">
                  <p className="font-roboto">{data?.aboutMe?.gender?.en}</p>
                </div>
                <div className="col-span-1">
                  <p className="font-roboto">{data?.aboutMe?.email}</p>
                </div>
                <div className="col-span-3">
                  <p className="font-roboto">{data?.aboutMe?.bio?.en}</p>
                </div>
              </div>
              <div className="border-t porder-x-0 border-b-0 border-solid border-border my-8"></div>
              <div className="ltr grid gap-y-3">
                {data?.aboutMe?.socialsNetwork?.map(
                  (item: ISocialNetworkProps) => (
                    <div
                      className="flex justify-start items-center gap-x-3"
                      key={item._id}
                    >
                      <SvgIcon
                        name={item?.icon}
                        color="var(--color-caption)"
                        size={20}
                      />
                      <p>{item?.link}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <p className="font-medium text-titr">
                لطفا اطلاعات شخصی خود را ثبت کنید
              </p>
            </div>
          )}
        </Card>
      </div>
    </>
  )
}

export default AboutList
