import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, task } = action.payload;
      const findCurrentId = state.list.findIndex((item) => item.id === id);
      let updatedData = { id: id, task: task };
      state.list[findCurrentId] = updatedData;
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
