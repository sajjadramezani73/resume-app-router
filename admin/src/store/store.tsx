import { configureStore } from '@reduxjs/toolkit'
import educationSlice from './educationSlice'
import experienceSlice from './experienceSlice'

export const store = configureStore({
  reducer: {
    education: educationSlice,
    experience: experienceSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
