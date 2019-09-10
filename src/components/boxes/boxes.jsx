import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

export const addBox= (box) => {
    return <div className = "box" > {box.value}</div>
}

export const addRow= (row) => {
    return <div className = "row" >{row.map((box) => {
        return addBox(box)
    })} </div>
}

const array =[[{value:'O'},{value:'X'},{value:' '}],[{value:'X'},{value:'X'},{value:'X'}],[{value:'X'},{value:'X'},{value:'X'}]]

export class Boxes extends Component {
    
    
    render() {
        return (
            <div className="game-grid">
                {array.map((row) =>{
                    return addRow(row)
                })}
            <div className="player">Player 1</div>
            </div>
        );
    }
}



export default connect(
    mapStateToProps,
)(Boxes);