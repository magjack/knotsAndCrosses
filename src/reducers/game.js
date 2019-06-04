import _ from "lodash-transpose";

const initialState = {

    isPlayerOne: 1

}

const checkSame = (row) => {
    return _.uniq(row).length === 1
}

const diagonals = [[0, 1, 2], [2, 1, 0]]

export const isWinner = (gameState) => {

    gameState.map((row) => {
        if (checkSame(row)) {
            return row[0];
        }
    })

    _.transpose(gameState).map((row) => {
        if (checkSame(row)) {
            return row[0];
        }
    });

    diagonals.map((diagonal) => {

        let diagoanlValues =gameState.map((row, index) => {
            return row[diagonal[index]]
        })

        if(checkSame(diagonals)){
            return diagoanlValues[0]
        }
    })
    return null
}

export default (state = initialState, action) => {
    switch (action.type) {

        case 'TAKE_TURN':
            return { ...state, isPlayerOne: !state.isPlayerOne }

        default:
            return state
    }
}
