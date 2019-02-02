export const updateCommentForm = CommentsFormReducer => {
    return {
        type: 'UPDATED_COMMENT_INFO',
        CommentsFormReducer
    }
}

export const resetCommentForm = () => {
    return {
        type: 'RESET_COMMENT_FORM'
    }
}

export const preFillForm = data => {
    return {
        type: 'PREFILL_FORM',
        payload: data
    }
}