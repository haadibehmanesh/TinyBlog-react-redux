import SinglePost from "./features/posts/singlePost";
import { EditPostForm } from "./features/posts/EditPostForm";
import Layout from "./components/layout";
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "./components/home";
import Contact from "./components/contact";
import UsersList from "./features/users/UsersList";
import UserPage from './features/users/UserPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="posts">
          <Route path=":postId" element={<SinglePost />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>

        <Route path="user">
          <Route index element={<UsersList />} />
          <Route path=":userId" element={<UserPage />} />
        </Route>

        {/* Catch all - replace with 404 component if you want */}
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;