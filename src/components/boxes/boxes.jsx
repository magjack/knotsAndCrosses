import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

export const addBox= (box) => {
    return <span className = "box" >This is a box </span>
}

export const addRow= (row) => {
    return <div className = "row" > </div>
}


export class boxes extends Component {


    render() {
        return (
            <div>

            </div>
        );
    }
}



export default connect(
    mapStateToProps,
)(boxes);