import { createSlice } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'

// type EducationKeys =
//   | 'title'
//   | 'company'
//   | 'jobType'
//   | 'jobTime'
//   | 'dateStart'
//   | 'dateEnd'
//   | 'description'
//   | 'companyLink'
//   | 'skill'

// function getPropertyByKey(obj: IEducationState, key: EducationKeys) {
//   return obj.addEducation[key]
// }

export interface IExperienceState {
  experienceForm: {
    showForm: boolean
  }
  addExperience: {
    title: {
      fa: string
      en: string
    }
    company: {
      fa: string
      en: string
    }
    jobType: {
      fa: string
      en: string
    }
    jobTime: {
      fa: string
      en: string
    }
    dateStart: {
      fa: string
      en: string
    }
    dateEnd: {
      fa: string
      en: string
    }
    description: {
      fa: string
      en: string
    }
    companyLink: string
    skill: string[]
  }
}

const initialState: IExperienceState = {
  experienceForm: {
    showForm: false,
  },
  addExperience: {
    title: {
      fa: '',
      en: '',
    },
    company: {
      fa: '',
      en: '',
    },
    jobType: {
      fa: '',
      en: '',
    },
    jobTime: {
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
    description: {
      fa: '',
      en: '',
    },
    companyLink: '',
    skill: [],
  },
}

const { actions, reducer } = createSlice({
  name: 'experience',
  initialState: initialState,
  reducers: {
    updateExperience: (state, action) => {
      state.experienceForm = { ...state.experienceForm, ...action.payload }
    },
    // updateAddExperience: (state, action) => {
    //   const { name, amount } = action.payload
    //   const usedObj = getPropertyByKey(state, name)
    //   console.log({ ...usedObj, ...amount })
    //   const newObj = { [name]: { ...usedObj, ...amount } }

    //   state.addEducation = { ...state.addEducation, ...newObj }
    // },
    // updateEditEducation: (state, action) => {
    //   state.addEducation = { ...state.addEducation, ...action.payload }
    // },
    resetExperience: (state) => {
      state.experienceForm = initialState.experienceForm
      state.addExperience = initialState.addExperience
    },
  },
})

export const useExperienceActions = function () {
  const dispatch = useDispatch()
  const { experience } = useSelector((store: RootState) => store)

  return {
    experience,
    updateExperience: (value: object) =>
      dispatch(actions.updateExperience(value)),
    // updateAddEducation: (value: object) =>
    //   dispatch(actions.updateAddEducation(value)),
    // updateEditEducation: (value: object) =>
    //   dispatch(actions.updateEditEducation(value)),
    resetExperience: () => dispatch(actions.resetExperience()),
  }
}
export default reducer
