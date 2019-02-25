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
