const initialState = {
    content: '',
    prefill: {}
  }
  
  export default (state = initialState, action) => {
  
    switch(action.type) {
      case 'UPDATED_COMMENT_INFO':
        return action.CommentsFormReducer;
  
      case 'RESET_COMMENT_FORM':
        return initialState;

        case 'PREFILL_FORM':
        return { ...state, prefill: action.payload }

      
      default: 
        return state;
    }
  }