import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Contact from './components/contact';
import Home from './components/home';
import SinglePost from "./features/posts/singlePost";
import Layout from "./components/layout";
import { EditPostForm } from "./features/posts/EditPostForm";

export default function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/posts/:postId" element={<SinglePost />} />
          <Route path="/editPost/:postId" element={<EditPostForm />} />
        </Route>

      </Routes>
    </BrowserRouter>

  );
}