import { configureStore } from "@reduxjs/toolkit";
import taskReducer from '../features/task/taskSlice'

// * Lo que espera el store son los reducers
export const store = configureStore({
  reducer: {
    task: taskReducer
  }
})