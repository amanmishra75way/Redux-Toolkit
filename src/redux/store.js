import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../faetures/counterSlice.jsx";
import reducer from "../faetures/counterSlice.jsx";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
