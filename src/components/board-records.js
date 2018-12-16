import React, { Component } from 'react';
import '../styles/board-records.css';
import PropTypes from 'prop-types'
import { Stack } from 'immutable'
import { playerNames } from '../libs/board-libs'



function BoardRecords(props) {

    const colorBadge = (player, id) => {
        if (id == 0) return 'badge badge-info'
        if (player == 1) return 'badge badge-dark'
        if (player == 2) return 'badge badge-light'
    }
    return (
        <div className="records">
            <div className="records__top"><span>Records:</span></div>

            <ul>
                {props.boardHistory.reverse().map((x, i) => (

                    <li key={i} onClick={() => props.actions.showRecord(x.boardState)}>
                        <a href="#" className={colorBadge(x.player, x.id)}>
                            #{x.id + ' - '}  {x.id !== 0 ? 'Move ' + playerNames(props.players, x.player) : 'Start'}
                        </a>
                    </li>
                ))}

            </ul>
        </div>
    )
}


export default BoardRecords;

BoardRecords.propTypes = {
    // boardH:  PropTypes.instanceOf(Stack).isRequired,
}