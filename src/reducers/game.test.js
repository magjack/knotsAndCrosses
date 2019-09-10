import { isWinner } from './game';
import gameReducer from './game';

describe('Testing game reducer', () => {

    it('Places a value into grid array after turn', () => {

        const prevState = {gameState:[[null,'X',null],[null,'O',null],[null,null,null]]};
        
        const newState = gameReducer(prevState, {type: 'TAKE_TURN',x:1,y:2,value:'X'})

        const expectedState = {gameState:[[null,'X',null],[null,'O','X'],[null,null,null]]}
        expect(newState.gameState).toEqual(expectedState.gameState);
        
    });

    it('Changes the player from X to O after turn', () => {

        const prevState = {isPlayerOne:true,gameState:[[null,'X',null],[null,'O','X'],[null,null,null]]};
        
        const newState = gameReducer(prevState, {type: 'TAKE_TURN',x:1,y:2,value:'X'})

        const expectedState = {isPlayerOne:false,gameState:[[null,'X',null],[null,'O','X'],[null,null,null]]}
        expect(newState.player).toEqual(expectedState.player);
        
    });

    it('Check if the game is over after 9 if no winner', () => {
        const prevState = {gameState:[[null,'X','O'],['O','X','O'],['X','O','X']], isGamerOver:false, turn:8};
        
        const newState = gameReducer(prevState, {type: 'TAKE_TURN',x:0,y:0,value:'O'})
        

        const expectedState = {gameState:[['O','X','O'],['O','X','O'],['X','O','X']], isGamerOver:true};
        expect(newState.isGamerOver).toEqual(expectedState.isGamerOver);
        
    });

    it('Check if the game is over if there is a winner', () => {
        const prevState = {gameState:[[null,'X','O'],['O','X','O'],['X','O','X']], isGamerOver:false};
        
        const newState = gameReducer(prevState, {type: 'TAKE_TURN',x:0,y:0,value:'X'})

        const expectedState = {gameState:[['X','X','X'],['O',null,'O'],[null,'O','X']], isGamerOver:'true',winner:'X'};
        expect(newState.winner).toEqual(expectedState.winner);
        
    });

});

describe('Testing the isThereAWinner function', () => {

    it('Checks for horizontal win', () => {
        const gameState = [['X','X','X'],['O',null,'O'],[null,'O','X']]

        expect(isWinner(gameState)).toEqual('X');
    });

    it('Checks for vertical win', () => {
        const gameState = [['X','O','X'],['X','O','O'],[null,'O','X']]

        expect(isWinner(gameState)).toEqual('O');
        
    });

    it('Check for diagonal win', () => {
        const gameState = [['X','O','X'],['X','X','O'],[null,'O','X']]

        expect(isWinner(gameState)).toEqual('X');
    });

    it('Check for stale mate', () => {

        const gameState = [['X','O','X'],['X',null,'O'],[null,'O','X']]

        expect(isWinner(gameState)).toEqual(null);
        
    });
    
});