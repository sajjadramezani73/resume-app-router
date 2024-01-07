import { createSlice } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'

type ExperienceKeys =
  | 'title'
  | 'company'
  | 'jobType'
  | 'jobTime'
  | 'dateStart'
  | 'dateEnd'
  | 'description'
// | 'companyLink'
// | 'skill'

function getPropertyByKey(obj: IExperienceState, key: ExperienceKeys) {
  return obj.addExperience[key]
}

export interface IExperienceState {
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
    updateAddExperience: (state, action) => {
      const { name, amount } = action.payload
      console.log('first', name, amount)
      const usedObj = getPropertyByKey(state, name)
      console.log({ ...usedObj, ...amount })
      const newObj = { [name]: { ...usedObj, ...amount } }

      state.addExperience = { ...state.addExperience, ...newObj }
    },
    updateAddExperienceOneProperty: (state, action) => {
      state.addExperience = { ...state.addExperience, ...action.payload }
    },
    updateEditExperience: (state, action) => {
      state.addExperience = { ...state.addExperience, ...action.payload }
    },
    resetExperience: (state) => {
      state.addExperience = initialState.addExperience
    },
  },
})

export const useExperienceActions = function () {
  const dispatch = useDispatch()
  const { experience } = useSelector((store: RootState) => store)

  return {
    experience,
    updateAddExperience: (value: object) =>
      dispatch(actions.updateAddExperience(value)),
    updateAddExperienceOneProperty: (value: object) =>
      dispatch(actions.updateAddExperienceOneProperty(value)),
    updateEditExperience: (value: object) =>
      dispatch(actions.updateEditExperience(value)),
    resetExperience: () => dispatch(actions.resetExperience()),
  }
}
export default reducer
