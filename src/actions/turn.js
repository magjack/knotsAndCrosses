export const takeTurn = (x,y,value) => ({
    type: 'TAKE_TURN',
    x,
    y,
    value
})

export const rest = () => ({
    type: 'RESET'
})
