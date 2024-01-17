import { createSlice } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'

type ProjectKeys = 'title' | 'briefDescription' | 'description'

function getPropertyByKey(obj: IProjectState, key: ProjectKeys) {
  return obj.addProject[key]
}

export interface IProjectState {
  addProject: {
    title: {
      fa: string
      en: string
    }
    briefDescription: {
      fa: string
      en: string
    }
    description: {
      fa: string
      en: string
    }
    links: string[]
    skills: string[]
  }
}

const initialState: IProjectState = {
  addProject: {
    title: {
      fa: '',
      en: '',
    },
    briefDescription: {
      fa: '',
      en: '',
    },
    description: {
      fa: '',
      en: '',
    },
    links: [''],
    skills: [],
  },
}

const { actions, reducer } = createSlice({
  name: 'project',
  initialState: initialState,
  reducers: {
    updateAddProject: (state, action) => {
      const { name, amount } = action.payload
      console.log('first', name, amount)
      const usedObj = getPropertyByKey(state, name)
      console.log({ ...usedObj, ...amount })
      const newObj = { [name]: { ...usedObj, ...amount } }

      state.addProject = { ...state.addProject, ...newObj }
    },
    updateAddProjectOneProperty: (state, action) => {
      state.addProject = { ...state.addProject, ...action.payload }
    },
    updateEditProject: (state, action) => {
      state.addProject = { ...state.addProject, ...action.payload }
    },
    resetProject: (state) => {
      state.addProject = initialState.addProject
    },
  },
})

export const useProjectActions = function () {
  const dispatch = useDispatch()
  const { project } = useSelector((store: RootState) => store)

  return {
    project,
    updateAddProject: (value: object) =>
      dispatch(actions.updateAddProject(value)),
    updateAddProjectOneProperty: (value: object) =>
      dispatch(actions.updateAddProjectOneProperty(value)),
    updateEditProject: (value: object) =>
      dispatch(actions.updateEditProject(value)),
    resetProject: () => dispatch(actions.resetProject()),
  }
}
export default reducer
