import { createSlice } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'

export interface IEducationState {
  education: {
    showForm: boolean
  }
}

const initialState: IEducationState = {
  education: {
    showForm: false,
  },
}

const { actions, reducer } = createSlice({
  name: 'education',
  initialState: initialState,
  reducers: {
    updateEducation: (state, action) => {
      state.education = { ...state.education, ...action.payload }
    },
  },
})

export const useEducationActions = function () {
  const dispatch = useDispatch()
  const { education } = useSelector((store: RootState) => store)

  return {
    education,
    updateEducation: (value: object) =>
      dispatch(actions.updateEducation(value)),
  }
}
export default reducer
