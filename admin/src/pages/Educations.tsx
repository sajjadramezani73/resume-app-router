import EducationList from '@/container/educations/EducationList'
import { Button, Card } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { useEducationActions } from '@/store/educationSlice'
import AddEducation from '@/container/educations/AddEducation'

const Educations = () => {
  const { education, updateEducation, resetEducation } = useEducationActions()
  console.log('education', education)

  return (
    <>
      <Card className="p-8 rounded-none flex justify-between items-center h-[100px]">
        <p className="text-titr text-[18px] font-bold">تحصیلات</p>
        {education?.education.showForm ? (
          <Button
            sx={{ '& .MuiButton-endIcon': { m: 0 } }}
            variant="contained"
            endIcon={<ChevronLeftIcon />}
            onClick={() => {
              updateEducation({ showForm: false })
              resetEducation()
            }}
          >
            برگشت به لیست
          </Button>
        ) : (
          <Button
            sx={{ '& .MuiButton-startIcon': { m: 0 } }}
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => updateEducation({ showForm: true })}
          >
            افزودن جدید
          </Button>
        )}
      </Card>
      <div className="p-8">
        {education?.education?.showForm ? <AddEducation /> : <EducationList />}
      </div>
    </>
  )
}

export default Educations
