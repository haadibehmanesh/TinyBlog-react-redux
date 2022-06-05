import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' }
];

export const postsSlice = createSlice({
  name: "posts",
  initialState: initialStateValue,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload)
    }

  },
});

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;