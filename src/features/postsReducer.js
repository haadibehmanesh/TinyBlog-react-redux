import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";

export const postsSlice = createSlice({
  name: "posts",
  initialState: { value: initialStateValue },
  reducers: {
    changePosts: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changePosts } = postsSlice.actions;

export default postsSlice.reducer;