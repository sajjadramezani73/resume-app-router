import {
  Card,
  Input,
  Option,
  Select,
  Typography,
} from '@material-tailwind/react'
import { useState } from 'react'

const AddEducation = () => {
  const [educationInfo, setEducationInfo] = useState({
    title: { fa: '', en: '' },
    university: { fa: '', en: '' },
    location: { fa: '', en: '' },
    dateStart: { fa: '', en: '' },
    dateEnd: { fa: '', en: '' },
    grade: { fa: '', en: '' },
  })

  return (
    <Card className="w-full overflow-hidden">
      <div className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 text-center">
        <Typography
          variant="small"
          color="blue-gray"
          className="font-normal leading-none opacity-70"
        >
          افزودن تجربه تحصیلی
        </Typography>
      </div>
      <div className="bg-white p-6 grid grid-cols-2 gap-x-4 gap-y-3 ltr">
        <div className="col-auto">
          <Input
            label="Title"
            value={educationInfo.title.en}
            color="blue"
            className=""
            onChange={(e) =>
              setEducationInfo({
                ...educationInfo,
                title: { ...educationInfo.title, en: e.target.value },
              })
            }
            crossOrigin={undefined}
          />
        </div>
        <div className="col-auto">
          <Input
            label="عنوان"
            value={educationInfo.title.fa}
            color="blue"
            className="rtl"
            onChange={(e) =>
              setEducationInfo({
                ...educationInfo,
                title: { ...educationInfo.title, fa: e.target.value },
              })
            }
            crossOrigin={undefined}
          />
        </div>
        <div className="col-auto">
          <Input
            label="University"
            value={educationInfo.university.en}
            color="blue"
            className=""
            onChange={(e) =>
              setEducationInfo({
                ...educationInfo,
                university: { ...educationInfo.university, en: e.target.value },
              })
            }
            crossOrigin={undefined}
          />
        </div>
        <div className="col-auto">
          <Input
            label="دانشگاه"
            value={educationInfo.university.fa}
            color="blue"
            className="rtl"
            onChange={(e) =>
              setEducationInfo({
                ...educationInfo,
                university: { ...educationInfo.university, fa: e.target.value },
              })
            }
            crossOrigin={undefined}
          />
        </div>
        <div className="col-auto">
          <Input
            label="Location"
            value={educationInfo.location.en}
            color="blue"
            className=""
            onChange={(e) =>
              setEducationInfo({
                ...educationInfo,
                location: { ...educationInfo.location, en: e.target.value },
              })
            }
            crossOrigin={undefined}
          />
        </div>
        <div className="col-auto">
          <Input
            label="آدرس"
            value={educationInfo.location.fa}
            color="blue"
            className="rtl"
            onChange={(e) =>
              setEducationInfo({
                ...educationInfo,
                location: { ...educationInfo.location, fa: e.target.value },
              })
            }
            crossOrigin={undefined}
          />
        </div>
        <div className="col-auto">
          <Input
            label="Date start"
            value={educationInfo.dateStart.en}
            color="blue"
            className=""
            onChange={(e) =>
              setEducationInfo({
                ...educationInfo,
                dateStart: { ...educationInfo.dateStart, en: e.target.value },
              })
            }
            crossOrigin={undefined}
          />
        </div>
        <div className="col-auto">
          <Input
            label="زمان شروع"
            value={educationInfo.dateStart.fa}
            color="blue"
            className="rtl"
            onChange={(e) =>
              setEducationInfo({
                ...educationInfo,
                dateStart: { ...educationInfo.dateStart, fa: e.target.value },
              })
            }
            crossOrigin={undefined}
          />
        </div>
        <div className="col-auto">
          <Input
            label="Date end"
            value={educationInfo.dateEnd.en}
            color="blue"
            className=""
            onChange={(e) =>
              setEducationInfo({
                ...educationInfo,
                dateEnd: { ...educationInfo.dateEnd, en: e.target.value },
              })
            }
            crossOrigin={undefined}
          />
        </div>
        <div className="col-auto">
          <Input
            label="زمان پایان"
            value={educationInfo.dateEnd.fa}
            color="blue"
            className="rtl"
            onChange={(e) =>
              setEducationInfo({
                ...educationInfo,
                dateEnd: { ...educationInfo.dateEnd, fa: e.target.value },
              })
            }
            crossOrigin={undefined}
          />
        </div>
        <div className="col-auto">
          <Select color="blue" label="Grade">
            <Option>Associate</Option>
            <Option>Bachelor</Option>
            <Option>Master</Option>
            <Option>Doctoral</Option>
            <Option>Professional</Option>
          </Select>
        </div>
        <div className="col-auto">
          <Select color="blue" label="مدرک" className="rtl">
            <Option>کاردانی</Option>
            <Option>لیسانس</Option>
            <Option>فوق لیسانس</Option>
            <Option>دکترا</Option>
            <Option>دوره تخصص</Option>
          </Select>
        </div>
      </div>
    </Card>
  )
}

export default AddEducation
