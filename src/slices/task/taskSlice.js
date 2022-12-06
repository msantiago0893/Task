import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Task 1",
    description: "Task 1 description",
    completed: false
  },
  {
    id: "2",
    title: "Task 2",
    description: "Task 2 description",
    completed: false
  }
];

export const taskSlice = createSlice({
  name: 'task',
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      // state.push(action.payload); // esto segun se puede hacer en redux tooltik
      return [
        ...state,
        action.payload
      ]
    },
    deleteTask: (state, action) => {
      const taskFound = state.find(task => task.id === action.payload);

      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1);
      }
    },
    updateTask: (state, action) => {
      const {id, title, description} = action.payload;

      const task = state.find(task => task.id === id);

      if (task) {
        task.title = title;
        task.description = description;
      }

    }
  }
});

export const { addTask, deleteTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;