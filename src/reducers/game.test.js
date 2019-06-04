import { gameReducer, isWinner } from "module";

describe('Testing game reducer', () => {

    it('Places a value into grid array after turn', () => {

        const prevState = {gameState:[[null,'X',null][null,'O',null][null,null,null]]};
        
        const newState = gameReducer(prevState, {type: 'TAKE_TURN',x:1,y:2,value:'X'})

        expectedState = {gameState:[[null,'X',null][null,'O','X'][null,null,null]]}
        expect(newState).toEqual({expectedState});
        
    });

    it('Changes the player from X to O after turn', () => {

        const prevState = {player:'X'};
        
        const newState = gameReducer(prevState, {type: 'TAKE_TURN',x:1,y:2,value:'X'})

        expectedState = {player:'O'}
        expect(newState).toEqual({expectedState});
        
    });

    it('Check if the game is over after 9 if no winner', () => {
        const prevState = {gameState:[[null,'X','O']['O','X','O']['X','O','X']], gameStatus:''};
        
        const newState = gameReducer(prevState, {type: 'TAKE_TURN',x:0,y:0,value:'O'})

        expectedState = {gameState:[['O','X','O']['O','X','O']['X','O','X']], gameStatus:'stallmate'};
        expect(newState).toEqual({expectedState});
        
    });

    it('Check if the game is over if there is a winner', () => {
        const prevState = {gameState:[[null,'X','O']['O','X','O']['X','O','X']], gameStatus:''};
        
        const newState = gameReducer(prevState, {type: 'TAKE_TURN',x:0,y:0,value:'X'})

        expectedState = {gameState:[['X','X','X']['O',null,'O'][null,'O','X']], gameStatus:'X winner'};
        expect(newState).toEqual({expectedState});
        
    });
    it('Resets the game after resubmit action', () => {

        const newState = gameReducer(prevState, {type: 'TAKE_TURN',x:0,y:0,value:'X'})

        expectedState = {gameState:[['X','X','X']['O',null,'O'][null,'O','X']], gameStatus:'X winner'};
        expect(newState).toEqual({expectedState});
        
    });    

});

describe('Testing the isThereAWinner function', () => {

    it('Checks for horizontal win', () => {
        gameState = [['X','X','X']['O',null,'O'][null,'O','X']]

        expect(isWinner(gameState)).toEqual('X');
    });

    it('Checks for vertical win', () => {
        gameState = [['X','O','X']['X','O','O'][null,'O','X']]

        expect(isWinner(gameState)).toEqual('O');
        
    });

    it('Check for vertical win', () => {
        gameState = [['X','O','X']['X','X','O'][null,'O','X']]

        expect(isWinner(gameState)).toEqual('X');
    });

    it('Check for stale mate', () => {

        gameState = [['X','O','X']['X',null,'O'][null,'O','X']]

        expect(isWinner(gameState)).toEqual(null);
        
    });
    
});