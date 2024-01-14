import { configureStore } from '@reduxjs/toolkit'
import educationSlice from './educationSlice'
import experienceSlice from './experienceSlice'
import projectSlice from './projectSlice'

export const store = configureStore({
  reducer: {
    education: educationSlice,
    experience: experienceSlice,
    project: projectSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
