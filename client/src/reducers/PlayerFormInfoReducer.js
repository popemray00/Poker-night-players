const initialState = {
    name: '', 
    age: '', 
    img_url: '', 
    fav_hand: '',
    prefill: {}
  }
  
  export default (state = initialState, action) => {
  
    switch(action.type) {
      case 'UPDATED_INFO':
        return action.PlayerFormInfoReducer;
  
      case 'RESET_PLAYER_FORM':
        return initialState;
  
       case 'PREFILL_FORM':
        return { ...state, prefill: action.payload }
      
      default: 
        return state;
    }
  }