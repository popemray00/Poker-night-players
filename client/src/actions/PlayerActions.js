import {resetPlayerForm} from './PlayerFormAction'; 

const API_URL = 'http://localhost:3001';

const setPlayers = players => {
    return {
        type: 'GET_PLAYER_INFO',
        players
    }
}

const addPlayer = player => {
    return {
        type: 'CREATE_PLAYER_INFO',
        player
    }
}



//^^^^^Action Creators^^^^^^^


export const getPlayers = () => {
    return (dispatch => {
        return fetch(`${API_URL}/players`)
        .then(response => response.json())
        .then(players => dispatch(setPlayers(players)))
        .catch(error => console.log(error));
    })
}

export const createPlayers = player => {
    return dispatch => {
        return fetch(`${API_URL}/players`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ player: player})
        })
        .then(response => response.json())
        .then(player => {
            dispatch(addPlayer(player))
            dispatch(resetPlayerForm())
        })
        .catch(error => console.log(error));
    }
}

//^^^^^^^^^^^^^^^^^^^^^^^Async Actions^^^^^^^^^^^^^^^^^^^^^^^
