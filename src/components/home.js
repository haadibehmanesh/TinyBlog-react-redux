import { AddPostForm } from "../features/posts/AddPostForm";
import { PostsList } from "../features/posts/postsList"

const Home = () => {
    return (
        <>
            <AddPostForm />
            <PostsList />
        </>
    );
}

export default Home;