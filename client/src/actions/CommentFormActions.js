export const updateCommentForm = CommentFormReducer => {
    return {
        type: 'UPDATED_COMMENT',
        CommentFormReducer
    }
}

export const resetCommentForm = () => {
    return {
        type: 'RESET_COMMENT_FORM'
    }
}