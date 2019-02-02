export default (state = {comments: []}, action) => {
    switch (action.type) {

        case 'GET_COMMENT':
            return { ...state, comments: action.comments };

        case 'CREATE_COMMENT':
            return { ...state, comments: [...state.comments, action.comment]};

        case 'DELETE_COMMENT':
            return { ...state, comments: state.comments.filter(comment => comment.id !== action.id)};
            

        default:
            return state;
    }
}