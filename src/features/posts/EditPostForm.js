import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { postUpdated, selectPostById } from './postsSlice'

export const EditPostForm = () => {
  const { postId } = useParams();

  const post = useSelector(state => selectPostById(state, Number(postId)))
  
  const [title, setTitle] = useState(post.title)
  const [body, setBody] = useState(post.body)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setBody(e.target.value)

  const onSavePostClicked = () => {
    if (title && body) {
      dispatch(postUpdated({ id: postId, title, body }))
      navigate(`/posts/${postId}`)
    }
  }

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's on your mind?"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={body}
          onChange={onContentChanged}
        />
      </form>
      <button type="button" onClick={onSavePostClicked}>
        Save Post
      </button>
    </section>
  )
}