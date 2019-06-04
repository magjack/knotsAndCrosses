import { takeTurn } from './turn'

describe('Test the turn action creator', () => {

    it('Generates a turn action with coordinate and value', () => {
        const action = takeTurn( 1 , 4, 'x')

        expect(action.x).toEqual(1)
    });
    
});