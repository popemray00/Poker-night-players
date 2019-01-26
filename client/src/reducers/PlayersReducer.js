export default (state = {players: []}, action) => {
    switch (action.type) {

        case 'GET_PLAYER_INFO':
            return { ...state, players: action.players };

        case 'CREATE_PLAYER_INFO':
            return { ...state, players: [...state.players, action.player]};

        case 'DELETE_PLAYER_INFO':
            return { ...state, players: state.players.filter(player => player.id !== action.id)};

        case 'UPDATE_PLAYER_INFO':

            const updated = state.players.map(player => {
            if (action.player.id === player.id) {
                return action.player
            }
            else return player
        })

        return {...state, players: updated};

        default:
            return state;
    }
}