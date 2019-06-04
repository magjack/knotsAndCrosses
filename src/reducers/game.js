const initialState = {

    isPlayerOne:1

}

export default (state = initialState, action) => {
    switch (action.type) {

    case 'TAKE_TURN':
        return { ...state, isPlayerOne: !state.isPlayerOne }

    default:
        return state
    }
}
