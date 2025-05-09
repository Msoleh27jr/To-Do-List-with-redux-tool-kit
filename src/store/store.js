import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../reducers/forSlides'
export const store = configureStore({
  reducer: {
    counter : counterReducer
  },
})