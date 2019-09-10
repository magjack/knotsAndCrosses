import _ from "lodash-transpose";

const initialState = {

    isPlayerOne: true,
    isGamerOver:false,
    winner: null,
    gameState: [['','',''],['','',''],['','','']],
    turn: 0

}

const checkSame = (array) => {
    return _.uniq(array).length === 1
}

const diagonals = [[0, 1, 2], [2, 1, 0]]

export const isWinner = (gameState) => {
    let winner = null;

    gameState.forEach((row) => {
        if (checkSame(row)) {
            winner = row[0];
        }
    })

    _.transpose(gameState).forEach((row) => {
        if (checkSame(row)) {
            winner = row[0];
        }
    });

    diagonals.forEach((diagonal) => {

        let diagoanlValues =gameState.map((row, index) => {
            return row[diagonal[index]]
        })

        if(checkSame(diagoanlValues)){
            winner = diagoanlValues[0];
        }
    })
    return winner
}

export default (state = initialState, action) => {
    switch (action.type) {

        case 'TAKE_TURN':
            const newGameState = state.gameState
            newGameState[action.x][action.y] = action.value
            
            return { ...state, isPlayerOne: !state.isPlayerOne, gameState:newGameState, isGamerOver: state.turn+1 >=9 || Boolean(isWinner(state.gameState)), turn: state.turn + 1, winner: isWinner(state.gameState) }

        case 'RESET':
            return initialState

        default:
            return state
    }
}
