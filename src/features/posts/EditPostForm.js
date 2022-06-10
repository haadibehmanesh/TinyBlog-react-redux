import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updatePost, selectPostById } from './postsSlice'

export const EditPostForm = () => {
  const { postId } = useParams();

  const post = useSelector(state => selectPostById(state, Number(postId)))
  const users = useSelector(state => state.users)

  const [title, setTitle] = useState(post.title)
  const [body, setBody] = useState(post.body)
  const [userId, setUserId] = useState(post?.userId)
  const [requestStatus, setRequestStatus] = useState('idle')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setBody(e.target.value)
  const onAuthorChanged = e => setUserId(Number(e.target.value))

  const canSave = [title, body, userId].every(Boolean) && requestStatus === 'idle';

  const onSavePostClicked = () => {
    if (canSave) {
      try {
        setRequestStatus('pending')
        dispatch(updatePost({ id: post.id, title, body: body, userId, reactions: post.reactions })).unwrap()

        setTitle('')
        setBody('')
        setUserId('')
        navigate(`/posts/${postId}`)
      } catch (err) {
        console.error('Failed to save the post', err)
      } finally {
        setRequestStatus('idle')
      }
    }
  }
  const usersOptions = users.map(user => (
    <option
      key={user.id}
      value={user.id}
    >{user.name}</option>
  ))


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
        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {usersOptions}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={body}
          onChange={onContentChanged}
        />
      </form>
      <button
        type="button"
        onClick={onSavePostClicked}
        disabled={!canSave}
      >
        Save Post
      </button>
    </section>
  )
}