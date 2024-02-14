import { createSlice } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { ISocialNetworkProps } from '@/types/Types'

type AboutKeys = 'firstName' | 'lastName' | 'job' | 'address' | 'bio' | 'gender'

function getPropertyByKey(obj: IAboutState, key: AboutKeys) {
  return obj.addAbout[key]
}

export interface IAboutState {
  addAbout: {
    firstName: {
      fa: string
      en: string
    }
    lastName: {
      fa: string
      en: string
    }
    job: {
      fa: string
      en: string
    }
    address: {
      fa: string
      en: string
    }
    bio: {
      fa: string
      en: string
    }
    gender: {
      fa: string
      en: string
    }
    age: number | null
    email: string
    phone: string

    socialsNetwork: ISocialNetworkProps[]
  }
}

const initialState: IAboutState = {
  addAbout: {
    firstName: {
      fa: '',
      en: '',
    },
    lastName: {
      fa: '',
      en: '',
    },
    job: {
      fa: '',
      en: '',
    },
    address: {
      fa: '',
      en: '',
    },
    bio: {
      fa: '',
      en: '',
    },
    gender: {
      fa: '',
      en: '',
    },
    age: null,
    email: '',
    phone: '',
    socialsNetwork: [],
  },
}

const { actions, reducer } = createSlice({
  name: 'about',
  initialState: initialState,
  reducers: {
    updateAddAbout: (state, action) => {
      const { name, amount } = action.payload
      const usedObj = getPropertyByKey(state, name)
      const newObj = { [name]: { ...usedObj, ...amount } }
      state.addAbout = { ...state.addAbout, ...newObj }
    },
    updateAddAboutOneProperty: (state, action) => {
      state.addAbout = { ...state.addAbout, ...action.payload }
    },
    updateEditAbout: (state, action) => {
      state.addAbout = { ...state.addAbout, ...action.payload }
    },
    // resetProject: (state) => {
    //   state.addProject = initialState.addProject
    // },
  },
})

export const useAboutActions = function () {
  const dispatch = useDispatch()
  const { about } = useSelector((store: RootState) => store)

  return {
    about,
    updateAddAbout: (value: object) => dispatch(actions.updateAddAbout(value)),
    updateAddAboutOneProperty: (value: object) =>
      dispatch(actions.updateAddAboutOneProperty(value)),
    updateEditAbout: (value: object) =>
      dispatch(actions.updateEditAbout(value)),
    // resetProject: () => dispatch(actions.resetProject()),
  }
}
export default reducer
