import React from 'react'
import { useSelector } from 'react-redux'
import { Spinner } from '../../components/spinner'
import PostExcerpt from './PostExcerpt'
import { selectPostIds, getPostsStatus, getPostsError } from "./postsSlice";

export const PostsList = () => {
    const orderedPostIds = useSelector(selectPostIds)
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    let content
    
    if (postStatus === 'loading') {
        content = <Spinner text="Loading..." />
    } else if (postStatus === 'succeeded') {
        content = orderedPostIds.map(postId => <PostExcerpt key={postId} postId={postId} />)
    } else if (postStatus === 'failed') {
        content = <div>{error}</div>
    }

    return (
        <section className="posts-list">
            <h2>Posts</h2>
            {content}
        </section>
    )
}
