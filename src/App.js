import SinglePost from "./features/posts/singlePost";
import { EditPostForm } from "./features/posts/EditPostForm";
import Layout from "./components/layout";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/home";
import Contact from "./components/contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="posts">
          <Route path=":postId" element={<SinglePost />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;