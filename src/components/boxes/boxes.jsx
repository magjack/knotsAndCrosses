import React, { Component } from 'react';
import { connect } from 'react-redux';
import { takeTurn } from '../../actions/turn'

function mapStateToProps(state) {
    return {
        game: state.gameReducer

    };
}

function mapDispatchToProps(dispatch) {
    return {

        takeTurn: (x, y, value) => {
            return() => dispatch(takeTurn(x, y, value))
        }
    }

};


export class Boxes extends Component {

    render() {
        return (
            <div className="game-grid">
                {this.props.game.gameState.map((row, rowIndex) => {
                    return <div className="row" >{row.map((value, index) => {
                        return <div className="box" onClick={ !value ? this.props.takeTurn(rowIndex, index, this.props.game.isPlayerOne ? 'X' : 'O') : null} > {value}</div>
                    })} </div>

                })}
                {this.props.game.isGamerOver ?
                    <div className="player">{this.props.game.winner ? `${this.props.game.winner} Wins ` : 'No Winner' } </div>
                    : <div className="player">Player {this.props.game.isPlayerOne ? 'X' : 'O'} turn</div>}
            </div>
        );
    }
}



export default connect(
    mapStateToProps, mapDispatchToProps
)(Boxes);