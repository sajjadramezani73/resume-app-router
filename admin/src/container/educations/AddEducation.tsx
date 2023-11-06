import React, { useState } from 'react'
import {
  Box,
  Button,
  Card,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material'
import { Form, Formik } from 'formik'
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import { IEducationProps } from '@/types/Types'

const steps = [1, 2]

const AddEducation = () => {
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

  const renderComponent = (activeStep: number, values: IEducationProps) => {
    console.log('values', values)

    switch (activeStep) {
      case 0:
        return <Step1 />
      case 1:
        return <Step2 />

      default:
        break
    }
  }
  return (
    <Card className="p-8">
      <Formik
        initialValues={initialValues}
        //  validate={values => {
        //    const errors = {};
        //    if (!values.email) {
        //      errors.email = 'Required';
        //    } else if (
        //      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        //    ) {
        //      errors.email = 'Invalid email address';
        //    }
        //    return errors;
        //  }}
        onSubmit={(values) => {
          console.log('value', values)
        }}
      >
        {({ values }) => (
          <Form>
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
            {activeStep === steps.length ? (
              <>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  All steps completed - you&apos;re finished
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  <Box sx={{ flex: '1 1 auto' }} />
                  <Button onClick={handleReset}>Reset</Button>
                </Box>
              </>
            ) : (
              <>
                {
                  <div className="py-8 px-4">
                    {renderComponent(activeStep, values)}
                  </div>
                }

                <div className="flex justify-between pt-2">
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                  >
                    برگشت
                  </Button>

                  <Button onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'تمام' : 'بعدی'}
                  </Button>
                </div>
              </>
            )}
          </Form>
        )}
      </Formik>
    </Card>
  )
}

export default AddEducation
