import React, { useState } from 'react'
import { Button, Card, Step, StepLabel, Stepper } from '@mui/material'
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import { createEducations } from '@/services/queries'
import { useEducationActions } from '@/store/educationSlice'

const steps = [1, 2]

const AddEducation = () => {
  const { updateEducation } = useEducationActions()

  const [initialValues] = useState({
    title: {
      fa: '',
      en: '',
    },
    university: {
      fa: '',
      en: '',
    },
    location: {
      fa: '',
      en: '',
    },
    dateStart: {
      fa: '',
      en: '',
    },
    dateEnd: {
      fa: '',
      en: '',
    },
    grade: {
      fa: '',
      en: '',
    },
  })
  const [activeStep, setActiveStep] = React.useState(0)
  const [skipped, setSkipped] = React.useState(new Set<number>())

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

  const renderComponent = (activeStep: number) => {
    switch (activeStep) {
      case 0:
        return <Step1 />
      case 1:
        return <Step2 />

      default:
        break
    }
  }

  const handleSubmit = (values: any) => {
    createEducations(values)
      .then((res) => {
        handleReset()
        updateEducation({ showForm: false })
      })
      .catch((err) => {
        console.log(err)
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
              <Button variant="contained" type="submit">
                ارسال
              </Button>
            ) : (
              <Button variant="contained" onClick={handleNext}>
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
