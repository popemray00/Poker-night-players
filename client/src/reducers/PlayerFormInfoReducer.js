const initialState = {
    name: '', 
    age: '', 
    img_url: '', 
    fav_hand: '',
    
  }
  
  export default (state = initialState, action) => {
  
    switch(action.type) {
      case 'UPDATED_INFO':
        return action.PlayerFormInfoReducer;
  
      case 'RESET_PLAYER_FORM':
        return initialState;
  
      
      
      default: 
        return state;
    }
  }