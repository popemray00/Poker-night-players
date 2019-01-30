import React from 'react';

const Comment = () => {
    return (
        <div>
            <div key={props.comment.id} className='comment-info'>
                <h2>{props.comment.content}</h2>
                <button onClick={ () => props.destroycomment(props.comment.id)}>DELETE comment</button>
            </div>
        </div>
    )
}

export default Comment;