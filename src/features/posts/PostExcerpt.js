import { PostAuthor } from './postAuthor'
import { TimeAgo } from './timeAgo'
import { ReactionButtons } from './reactionButtons'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";

const PostExcerpt = ({ postId }) => {
    const post = useSelector(state => selectPostById(state, postId))
    return (
        <article key={post.id} className="post-excerpt" >
            <h3>{post.title}</h3>
            <div>
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </div>
            <p className="post-content">{post.body.substring(0, 100)}</p>

            <ReactionButtons post={post} />
            <Link to={`/posts/${post.id}`} className="button muted-button">
                View Post
            </Link>
        </article>
    )
}

export default PostExcerpt;