import { createSlice } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'

type EducationKeys =
  | 'title'
  | 'university'
  | 'location'
  | 'dateStart'
  | 'dateEnd'
  | 'grade'

function getPropertyByKey(obj: IEducationState, key: EducationKeys) {
  return obj.addEducation[key]
}

export interface IEducationState {
  addEducation: {
    title: {
      fa: string
      en: string
    }
    university: {
      fa: string
      en: string
    }
    location: {
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
    grade: {
      fa: string
      en: string
    }
  }
}

const initialState: IEducationState = {
  addEducation: {
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
  },
}

const { actions, reducer } = createSlice({
  name: 'education',
  initialState: initialState,
  reducers: {
    updateAddEducation: (state, action) => {
      const { name, amount } = action.payload
      const usedObj = getPropertyByKey(state, name)
      console.log({ ...usedObj, ...amount })
      const newObj = { [name]: { ...usedObj, ...amount } }

      state.addEducation = { ...state.addEducation, ...newObj }
    },
    updateEditEducation: (state, action) => {
      state.addEducation = { ...state.addEducation, ...action.payload }
    },
    resetEducation: (state) => {
      state.addEducation = initialState.addEducation
    },
  },
})

export const useEducationActions = function () {
  const dispatch = useDispatch()
  const { education } = useSelector((store: RootState) => store)

  return {
    education,
    updateAddEducation: (value: object) =>
      dispatch(actions.updateAddEducation(value)),
    updateEditEducation: (value: object) =>
      dispatch(actions.updateEditEducation(value)),
    resetEducation: () => dispatch(actions.resetEducation()),
  }
}
export default reducer
