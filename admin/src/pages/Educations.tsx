import EducationList from '@/container/educations/EducationList'
import { Button, Card } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useEducationActions } from '@/store/educationSlice'

const Educations = () => {
  const { education, updateEducation } = useEducationActions()
  console.log('education', education)

  return (
    <>
      <Card className="p-8 rounded-none flex justify-between items-center">
        <p className="text-titr text-[18px] font-bold">تحصیلات</p>
        <Button
          sx={{ '& .MuiButton-startIcon': { m: 0 } }}
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => updateEducation({ showForm: true })}
        >
          افزودن جدید
        </Button>
      </Card>
      <div className="p-8">
        <EducationList />
      </div>
    </>
  )
}

export default Educations
