import { configureStore } from '@reduxjs/toolkit'
import educationSlice from './educationSlice'
import experienceSlice from './experienceSlice'
import projectSlice from './projectSlice'
import aboutSlice from './aboutSlice'

export const store = configureStore({
  reducer: {
    education: educationSlice,
    experience: experienceSlice,
    project: projectSlice,
    about: aboutSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
