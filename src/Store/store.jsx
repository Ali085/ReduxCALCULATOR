import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Store/CounterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})