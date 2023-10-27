import { configureStore } from '@reduxjs/toolkit'
import educationSlice from './educationSlice'

export const store = configureStore({
  reducer: {
    education: educationSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
