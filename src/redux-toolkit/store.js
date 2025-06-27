// store.js
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice.js";
import productReducer from "./productSlice.js";

export const store = configureStore({
  reducer: {
    todos: todoReducer, // this becomes state.todos
    product: productReducer, // this becomes state.product
  },
});
