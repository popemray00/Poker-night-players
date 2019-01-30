import React from 'react';

const Comment = () => {
    return (
        <div>
            <div key={props.comment.id} className='comment-info'>
                <h2>{props.comment.content}</h2>
                <h3>{props.comment.age}</h3>
                <button onClick={ () => props.destroycomment(props.comment.id)}>DELETE comment</button>
            </div>
        </div>
    )
}

export default Comment;