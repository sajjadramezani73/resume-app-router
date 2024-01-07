import { LoadingButton } from '@mui/lab'
import { Card, Stepper, Step, StepLabel, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Step1 from '../components/Step1'
import Step2 from '../components/Step2'
import { useNavigate, useParams } from 'react-router-dom'
import { useQueryClient } from 'react-query'
import { useExperienceActions } from '@/store/experienceSlice'
import { useMutate } from '@/services/axios/useRequest'
import { Paths } from '@/constants/Paths'
import { toast } from 'sonner'
import { Keys } from '@/constants/Keys'

const steps = [1, 2]

const CreateExperience = ({ mode }: { mode?: string }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const cache = useQueryClient()
  const { experience, resetExperience, updateAddExperience } =
    useExperienceActions()

  const [activeStep, setActiveStep] = useState(0)
  const [skipped, setSkipped] = useState(new Set<number>())
  const [disabled, setDisabled] = useState({
    step1: true,
    step2: true,
  })

  useEffect(() => {
    if (mode === 'edit') {
      console.log('')
    } else {
      resetExperience()
    }
  }, [mode])

  // check for desabled button step 1 and step 2
  useEffect(() => {
    if (activeStep === 0) {
      // for step 1
      experience.addExperience.title.fa === '' ||
      experience.addExperience.title.en === '' ||
      experience.addExperience.company.fa === '' ||
      experience.addExperience.company.en === '' ||
      experience.addExperience.jobType.fa === '' ||
      experience.addExperience.jobType.en === ''
        ? setDisabled({ ...disabled, step1: true })
        : setDisabled({ ...disabled, step1: false })
    }

    if (activeStep === 1) {
      // for step 2
      experience.addExperience.companyLink === '' ||
      experience.addExperience.description.en === '' ||
      experience.addExperience.description.en === '' ||
      experience.addExperience.dateStart.fa === '' ||
      experience.addExperience.dateStart.en === '' ||
      experience.addExperience.dateEnd.fa === '' ||
      experience.addExperience.dateEnd.en === '' ||
      experience.addExperience.jobTime.fa === '' ||
      experience.addExperience.jobTime.en === '' ||
      experience.addExperience.skill.length === 0
        ? setDisabled({ ...disabled, step2: true })
        : setDisabled({ ...disabled, step2: false })
    }
  }, [experience.addExperience, activeStep])

  const isStepSkipped = (step: number) => {
    return skipped.has(step)
  }

  const handleNext = () => {
    let newSkipped = skipped
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values())
      newSkipped.delete(activeStep)
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    setSkipped(newSkipped)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
    resetExperience()
    navigate('/dashboard/experience-list')
  }

  // save data form in redux store
  const onChangeHandler = (e: { target: { name: string; value: string } }) => {
    const title = e.target.name.split('.')[0]
    const lang = e.target.name.split('.')[1]
    const obj = { name: title, amount: { [lang]: e.target.value } }
    updateAddExperience(obj)
  }

  const renderComponent = (activeStep: number) => {
    switch (activeStep) {
      case 0:
        return (
          <Step1
            onChangeHandler={(event) => onChangeHandler(event)}
            onSelectHandler={(event) => onChangeHandler(event)}
          />
        )
      case 1:
        return (
          <Step2
            onChangeHandler={(event) => onChangeHandler(event)}
            onSelectHandler={(event) => onChangeHandler(event)}
          />
        )

      default:
        break
    }
  }

  const postExperience = useMutate({
    method: 'post',
    url: Paths.experience.base,
    successCallback() {
      toast.success('درخواست شما با موفقیت ثبت شد')
      cache.invalidateQueries(Keys.experience.experience)
      handleReset()
    },
    errorCallback: () => {
      toast.error('مشکلی در ثبت درخواست شما به وجود آمده است')
      console.log('errrrrr')
    },
  })

  const editExperience = useMutate({
    method: 'put',
    url: Paths.experience.base,
    successCallback() {
      toast.success('اطلاعات شغلی با موفقیت ویرایش شد')
      cache.invalidateQueries(Keys.experience.experience)
      handleReset()
    },
    errorCallback: () => {
      toast.error('مشکلی در ثبت درخواست شما به وجود آمده است')
      console.log('errrrrr')
    },
  })

  const handleSubmit = () => {
    postExperience.mutate({
      query: experience.addExperience,
    })
  }

  const handleEdit = () => {
    editExperience.mutate({
      query: experience.addExperience,
      id: id,
    })
  }

  return (
    <>
      <Card className="p-8 rounded-none flex justify-between items-center h-[100px]">
        <p className="text-titr text-[18px] font-bold">سابقه کاری جدید</p>
      </Card>
      <div className="p-8">
        <Card className="p-8">
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps: { completed?: boolean } = {}
              const labelProps: {
                optional?: React.ReactNode
              } = {}
              if (isStepSkipped(index)) {
                stepProps.completed = false
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}></StepLabel>
                </Step>
              )
            })}
          </Stepper>
          <>
            {<div className="py-8 px-4">{renderComponent(activeStep)}</div>}

            <div className="flex justify-between pt-2">
              <Button
                variant="outlined"
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                برگشت
              </Button>

              {activeStep === steps.length - 1 ? (
                <>
                  {postExperience.isLoading ? (
                    <LoadingButton
                      loading
                      variant="contained"
                      className="w-16"
                    ></LoadingButton>
                  ) : (
                    <Button
                      variant="contained"
                      disabled={disabled.step2}
                      onClick={mode === 'edit' ? handleEdit : handleSubmit}
                    >
                      ارسال
                    </Button>
                  )}
                </>
              ) : (
                <Button
                  variant="contained"
                  disabled={disabled.step1}
                  onClick={handleNext}
                >
                  بعدی
                </Button>
              )}
            </div>
          </>
        </Card>
      </div>
    </>
  )
}

export default CreateExperience
