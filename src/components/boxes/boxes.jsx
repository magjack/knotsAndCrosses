import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

export const addBox= (box) => {
    return <span className = "box" > {box.value}</span>
}

export const addRow= (row) => {
    return <div className = "row" >{row.map((box) => {
        return addBox(box)
    })} </div>
}

const array =[[{value:'O'},{value:'X'},{value:'O'}],[{value:'X'},{value:'X'},{value:'X'}],[{value:'X'},{value:'X'},{value:'X'}]]

export class Boxes extends Component {
    
    
    render() {
        return (
            <div className="game-grid">
                {array.map((row) =>{
                    return addRow(row)
                })}
            <div>Player 1</div>
            </div>
        );
    }
}



export default connect(
    mapStateToProps,
)(Boxes);