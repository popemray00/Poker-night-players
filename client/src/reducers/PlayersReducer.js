export default (state = {players: []}, action) => {
    switch (action.type) {

        case 'GET_PLAYER_INFO':
            return { ...state, players: action.players };

        case 'CREATE_PLAYER_INFO':
            return { ...state, players: [...state.players, action.player]};

       
        default:
            return state;
    }
}