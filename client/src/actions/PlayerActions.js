import {resetPlayerForm} from './PlayersFormActions'; 

const API_URL = 'http://localhost:3001/api';

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

const deletePlayer = id => {
    return {
        type: 'DELETE_PLAYER_INFO',
        id
    }
}

const editPlayer = player => {
    return {
        type: 'EDIT_PLAYER_INFO',
        player
    }
}

//^^^^^Action Creators^^^^^^^


export const getPlayers = () => {
    return (dispatch => {
        return fetch(`${API_URL}/players`)
        .then(response => response.json())
        .then(players => dispatch(setPlayers(players)))
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
    }
}

export const destroyPlayer = id => {
    return dispatch => {
        return fetch(`${API_URL}/players/${id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
        })
        .then(response => {
            dispatch(deletePlayer(id))
        })
    }
}

export const updatePlayer = (id, player) => {
    return dispatch => {
      return fetch(`${API_URL}/players/${id}`,{
          method: 'PATCH',
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({player: player})
      })
      .then(response => response.json())
      .then(player => {
          dispatch(editPlayer(player))
          dispatch(resetPlayerForm())
      })
    }
  }


