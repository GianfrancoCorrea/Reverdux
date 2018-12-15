import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BoardLayout from './board-layout';
import Cell from './cell'
import { List } from 'immutable'

class Board extends Component {

    render() {
        let toHint = List(this.props.hint)
        let cell = this.props.board.map((r, x) => {

            return (<Cell
                owner={r}
                cell={x}
                key={x}
                isHint={toHint.includes(x)}
                actions={this.props.actions}
            />)
        })

        return (
            <BoardLayout >
                {cell}
            </BoardLayout>
        )
    }
}


export default Board

// Board.propTypes = {
// 	board:  PropTypes.arrayOf(PropTypes.number).isRequired,
// 	cellClick: PropTypes.func.isRequired,
// }