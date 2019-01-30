const initialState = {
    content: ""
  }
  
  export default (state = initialState, action) => {
  
    switch(action.type) {
      case 'UPDATED_INFO':
        return action.PlayerFormInfoReducer;
  
      case 'RESET_COMMENT_FORM':
        return initialState;
      
      default: 
        return state;
    }
  }