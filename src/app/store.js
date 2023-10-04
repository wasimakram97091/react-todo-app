import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/counter/authSlice";
import todoReducer from "../features/counter/todoSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    todo: todoReducer,
  },
});

export default store;
