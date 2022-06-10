import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewPost } from './postsSlice'
//import { postAdded } from './postsSlice'

export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [userId, setUserId] = useState('')
  const [addRequestStatus, setAddRequestStatus] = useState('idle')

  const dispatch = useDispatch()

  const users = useSelector(state => state.users)

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setBody(e.target.value)
  const onAuthorChanged = e => setUserId(e.target.value)

  
  // const onSavePostClicked = () => {
  //   if (title && content) {
  //     dispatch(postAdded(title, content, userId))
  //     setTitle('')
  //     setContent('')
  //   }
  // }

  // const canSave = Boolean(title) && Boolean(content) && Boolean(userId)
  const canSave =
    [title, body, userId].every(Boolean) && addRequestStatus === 'idle'

  const onSavePostClicked = async () => {
    if (canSave) {
      try {
        setAddRequestStatus('pending')
        await dispatch(addNewPost({ title, body, userId: userId })).unwrap()
        setTitle('')
        setBody('')
        setUserId('')
      } catch (err) {
        console.error('Failed to save the post: ', err)
      } finally {
        setAddRequestStatus('idle')
      }
    }
  }
  const usersOptions = users.map(user => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  return (
    <section>
      <h2>Add a New Post</h2>
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
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  )
}