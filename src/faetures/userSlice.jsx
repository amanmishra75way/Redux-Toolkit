import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Thunk: Fetch users from an API
export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
