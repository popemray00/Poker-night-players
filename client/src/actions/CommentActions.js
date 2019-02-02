import {resetCommentForm} from './CommentFormActions'; 

const API_URL = 'http://localhost:3001/api';

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

const deleteComment = id => {
    return {
        type: 'DELETE_COMMENT',
        id
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
    return dispatch => {
        return fetch(`${API_URL}/comments`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ comment: comment})
        })
        .then(response => response.json())
        .then(player => {
            dispatch(addComment(comment))
            dispatch(resetCommentForm())
        })
    }
}

export const destroyComment = id => {
    return dispatch => {
        return fetch(`${API_URL}/comments/` + id, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
        })
        .then(response => {
            dispatch(deleteComment(id))
        })
    }
}
//^^^^^^^^^^^^^^^^^^^^^^^Async Actions^^^^^^^^^^^^^^^^^^^^^^^
