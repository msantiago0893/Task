import { configureStore } from "@reduxjs/toolkit";
import taskReducer from '../slices/task/taskSlice'

export const store = configureStore({
  reducer: {
    task: taskReducer
  }
})
