import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { PostAuthor } from './postAuthor';
import { ReactionButtons } from './reactionButtons';
import { TimeAgo } from './timeAgo';
import { selectPostById } from './postsSlice';

const SinglePost = () => {
  const { postId } = useParams();
  const post = useSelector(state => selectPostById(state, Number(postId)))

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <div>
          <PostAuthor userId={post.userId} />
          <TimeAgo timestamp={post.date} />
        </div>
        <p className="post-content">{post.body}</p>
        <ReactionButtons post={post} />
        <Link to={`/posts/edit/${post.id}`} className="button">
          Edit Post
        </Link>

      </article>
    </section>
  )
}
export default SinglePost;