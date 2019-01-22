const API_URL = 'http://localhost:3001/api';

const setPlayers = players => {
    return {
        type: 'GET_PLAYERS_INFO',
        players
    }
}

const addPlayer = player => {
    return {
        type: 'CREATE_PLAYER_INFO',
        player
    }
}

const deletePlayer = id => {
    return {
        type: 'DELETE_PLAYERS_INFO',
        id
    }
}

const editPlayer = player => {
    return {
        type: 'EDIT_PLAYERS_INFO',
        player
    }
}
