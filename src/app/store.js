import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/postsReducer';
import userReducer from '../features/userReducer';


export const store = configureStore({
  reducer: {
    posts: postsReducer,
    user: userReducer,
  },
});
