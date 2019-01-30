export const updatePlayerFormInfo = PlayerFormInfoReducer => {
    return {
        type: 'UPDATED_INFO',
        PlayerFormInfoReducer
    }
}

export const resetPlayerForm = () => {
    return {
        type: 'RESET_PLAYER_FORM'
    }
}

export const preFillForm = data => {
    return {
        type: 'PREFILL_FORM',
        payload: data
    }
}