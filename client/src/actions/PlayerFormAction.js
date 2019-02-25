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
