import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import { PostAuthor } from './postAuthor'
import { ReactionButtons } from './reactionButtons'
import { TimeAgo } from './timeAgo'
import { selectAllPosts } from './postsSlice'

export const PostsList = () => {
  // const posts = useSelector(state => state.posts)
  const posts = useSelector(selectAllPosts)

  // Sort posts in reverse chronological order by datetime string
  const orderedPosts = posts.slice().sort((a, b) => {
    a = a.date || '';
    b = b.date || '';
    return b.localeCompare(a)
  })

  const renderedPosts = orderedPosts.map(post => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <div>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </div>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <ReactionButtons post={post} />
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
    </article>
  ))

  return (<>
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
    <Outlet />
  </>

  )
}