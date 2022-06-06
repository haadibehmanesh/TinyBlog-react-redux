import React from 'react'
import { useSelector } from 'react-redux'

export const PostAuthor = ({ userId }) => {
  const author = useSelector(state =>
    state.users.find(user => user.id === userId)
  )

  return <div className='mt-2 mb-2'>
    <span>by {author ? author.name : 'Unknown author'}</span>
  </div>
}