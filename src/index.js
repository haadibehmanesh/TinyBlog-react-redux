import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './app/store';
import './styles/styles.css';
import { fetchUsers } from './features/users/usersSlice';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { fetchPosts } from './features/posts/postsSlice';

const container = document.getElementById('root');
const root = createRoot(container);
store.dispatch(fetchUsers());
store.dispatch(fetchPosts());
root.render(
  
    <Provider store={store}>
     <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  
);
