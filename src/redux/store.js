import { configureStore } from '@reduxjs/toolkit'
import bazarSlice, {bazarReducer} from "./bazarSlice"

export const store = configureStore({
  reducer: {
    bazar: bazarSlice
  },
})