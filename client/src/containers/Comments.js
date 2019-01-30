import React from 'react';
import Comment from '../components/Comment';
import CommentForm from './CommentForm'

const Comments = () => {
  return(
    <div className='comments-container'>
        <div className='App-header'>
            <h2>Comments are an advanced feature in the works.</h2>
            <CommentForm />
        </div>
    </div>
  )
}

export default Comments;