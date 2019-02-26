import {resetCommentForm} from './CommentFormActions'; 

const API_URL = 'http://localhost:3001';

const setComments = comments => {
    return {
        type: 'GET_COMMENT',
        comments
    }
}

const addComment = comment => {
    return {
        type: 'CREATE_COMMENT',
        comment
    }
}




//^^^^^Action Creators^^^^^^^


export const getComments = () => {
    return (dispatch => {
        return fetch(`${API_URL}/comments`)
        .then(response => response.json())
        .then(comments => dispatch(setComments(comments)))
        .catch(error => console.log(error))
    })
}

export const createComment = comment => {
    console.log('C')
    return dispatch => {
        return fetch(`${API_URL}/comments`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ comment: comment})
        })
        .then(response => response.json())
        .then(comment => {
            console.log('D')
            dispatch(addComment(comment))
            dispatch(resetCommentForm())
        })
    }
}


//^^^^^^^^^^^^^^^^^^^^^^^Async Actions^^^^^^^^^^^^^^^^^^^^^^^
