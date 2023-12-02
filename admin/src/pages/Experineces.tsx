import { Card, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { useExperienceActions } from '@/store/experienceSlice'
import AddExperience from '@/container/experiences/AddExperience'
import ExperienceList from '@/container/experiences/ExperienceList'

const Experineces = () => {
  const { experience, updateExperience, resetExperience } =
    useExperienceActions()

  return (
    <>
      <Card className="p-8 rounded-none flex justify-between items-center h-[100px]">
        <p className="text-titr text-[18px] font-bold">سابقه کاری</p>
        {experience?.experienceForm.showForm ? (
          <Button
            sx={{ '& .MuiButton-endIcon': { m: 0 } }}
            variant="contained"
            endIcon={<ChevronLeftIcon />}
            onClick={() => {
              updateExperience({ showForm: false })
              resetExperience()
            }}
          >
            برگشت به لیست
          </Button>
        ) : (
          <Button
            sx={{ '& .MuiButton-startIcon': { m: 0 } }}
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => updateExperience({ showForm: true })}
          >
            افزودن جدید
          </Button>
        )}
      </Card>
      <div className="p-8">
        {experience?.experienceForm?.showForm ? (
          <AddExperience />
        ) : (
          <ExperienceList />
        )}
      </div>
    </>
  )
}

export default Experineces
