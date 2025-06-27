import { createSlice, nanoid } from "@reduxjs/toolkit"; // nanoid genrate unique id

const initialState = {
  todos: [{ id: 1, text: "Aman" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(newTodo);
    }, // state refrence initial state  and actions reference to the paload or some paramter passed while  calling thsi reduce fn
    removeToDo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTodo, removeToDo } = todoSlice.actions;

export default todoSlice.reducer;
