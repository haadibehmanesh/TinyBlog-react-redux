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
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload;
      const existingPost = state.find(post => post.id === id)
      if (existingPost) {
        existingPost.title = title
        existingPost.content = content
      }
    },
  }
})

export const { postAdded, postUpdated } = postsSlice.actions

export default postsSlice.reducer;