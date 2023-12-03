import { useEffect, useState } from 'react'
import { Button, Card, Step, StepLabel, Stepper } from '@mui/material'
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import { createEducations } from '@/services/queries'
import { useEducationActions } from '@/store/educationSlice'
import LoadingButton from '@mui/lab/LoadingButton'

const steps = [1, 2]

const AddEducation = () => {
  const { updateEducation, education, updateAddEducation } =
    useEducationActions()

  const [activeStep, setActiveStep] = useState(0)
  const [skipped, setSkipped] = useState(new Set<number>())
  const [disabled, setDisabled] = useState({
    step1: true,
    step2: true,
  })
  const [loading, setLoading] = useState(false)

  // check for desabled button step 1 and step 2
  useEffect(() => {
    if (activeStep === 0) {
      // for step 1
      education.addEducation.title.fa === '' ||
      education.addEducation.title.en === '' ||
      education.addEducation.university.fa === '' ||
      education.addEducation.university.en === '' ||
      education.addEducation.location.fa === '' ||
      education.addEducation.location.en === ''
        ? setDisabled({ ...disabled, step1: true })
        : setDisabled({ ...disabled, step1: false })
    }

    if (activeStep === 1) {
      // for step 2
      education.addEducation.dateStart.fa === '' ||
      education.addEducation.dateStart.en === '' ||
      education.addEducation.dateEnd.fa === '' ||
      education.addEducation.dateEnd.en === '' ||
      education.addEducation.grade.fa === '' ||
      education.addEducation.grade.en === ''
        ? setDisabled({ ...disabled, step2: true })
        : setDisabled({ ...disabled, step2: false })
    }
  }, [education.addEducation])

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
  }

  // save data form in redux store
  const onChangeHandler = (e: { target: { name: string; value: string } }) => {
    const title = e.target.name.split('.')[0]
    const lang = e.target.name.split('.')[1]
    const obj = { name: title, amount: { [lang]: e.target.value } }

    updateAddEducation(obj)
  }

  const renderComponent = (activeStep: number) => {
    switch (activeStep) {
      case 0:
        return <Step1 onChangeHandler={(event) => onChangeHandler(event)} />
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

  const handleSubmit = () => {
    setLoading(true)
    createEducations(education.addEducation)
      .then((res) => {
        console.log(res)
        handleReset()
        updateEducation({ showForm: false })
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }

  return (
    <>
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
                {loading ? (
                  <LoadingButton
                    loading
                    variant="contained"
                    className="w-16"
                  ></LoadingButton>
                ) : (
                  <Button
                    variant="contained"
                    disabled={disabled.step2}
                    onClick={handleSubmit}
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
    </>
  )
}

export default AddEducation
