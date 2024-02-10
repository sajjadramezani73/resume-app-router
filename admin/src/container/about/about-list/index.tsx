import { Keys } from '@/constants/Keys'
import { Paths } from '@/constants/Paths'
import { useRequest } from '@/services/axios/useRequest'
import { Button, Card } from '@mui/material'
import UserAvatar from '../components/avatar'
import { useEffect, useState } from 'react'
import SvgIcon from '@/utils/SvgIcon'
import { Link } from 'react-router-dom'

const AboutList = () => {
  const [arraySocials, setArraySocials] = useState<string[]>([])

  const { data } = useRequest({
    queryKey: Keys.about.about,
    url: Paths.about.all,
  })

  useEffect(() => {
    data?.aboutMe?.socialsNetwork
      ? setArraySocials(Object.keys(data?.aboutMe?.socialsNetwork))
      : setArraySocials([])
  }, [data])
  console.log('data', data?.aboutMe)

  // console.log('arraySocials', arraySocials)

  return (
    <>
      <Card className="p-8 rounded-none flex justify-between items-center h-[100px]">
        <p className="text-titr text-[18px] font-bold">درباره من</p>
        <Link to="/dashboard/create-about">
          <Button size="small" variant="contained">
            ویرایش اطلاعات
          </Button>
        </Link>
      </Card>
      <div className="p-8">
        <Card className="p-8">
          <div className="flex items-stretch gap-x-4">
            <div className="border-l border-y-0 border-r-0 border-solid border-border pe-4 flex items-center">
              <UserAvatar />
            </div>
            <div className="flex-grow">
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
                {arraySocials.map((item: string) => (
                  <div
                    className="flex justify-start items-center gap-x-3"
                    key={item}
                  >
                    <SvgIcon
                      name={item}
                      color="var(--color-caption)"
                      size={20}
                    />
                    <p>{data?.aboutMe?.socialsNetwork[item]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}

export default AboutList
