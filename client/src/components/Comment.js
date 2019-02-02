import React from 'react';

const Comments = props => {
    return (
        <div>
            <div key={props.comment.id} className='comment-info'>
                <h2>{props.comment.content}</h2>
                {console.log(props)}
                <button onClick={ () => props.destroyComment(props.comment.id)}>DELETE COMMENT</button>
            </div>
        </div>
    )
}

export default Comments;