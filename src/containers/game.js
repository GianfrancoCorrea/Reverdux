import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AppLayout from '../components/app-layout';
import Menu from '../components/menu';
import GameLayout from '../components/game-layout';

import { Stack } from 'immutable'
import * as actions from '../actions/gameActions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'


class Game extends Component {
	render() {
		return (
			<AppLayout >
				{
					this.props.showInitialScreen == true ?

						<Menu
							pause={this.props.pause}
							show={this.props.showInitialScreen}
							score={this.props.score}
							players={this.props.players}
							actions={this.props.actions} />
						:
						<GameLayout
							actions={this.props.actions}
							winner={this.props.winner}
							players={this.props.players}
							turn={this.props.turn}
							hint={this.props.hint}
							board={this.props.board}
							boardHistory={this.props.boardHistory}
							score={this.props.score}
							isEnd={this.props.isEnd}
						/>
				}
			</AppLayout>
		)
	}

}

const mapStateToProps = (state, props) => {
	return {
		board: state.board,
		turn: state.turn,
		showInitialScreen: state.showInitialScreen,
		score: state.score,
		pause: state.pause,
		isEnd: state.isEnd,
		winner: state.winner,
		boardHistory: state.boardHistory,
		players: state.players,
		hint: state.hint
	}
}

export default connect(mapStateToProps, dispatch => ({
	actions: bindActionCreators(actions, dispatch)
}))(Game)


Game.propTypes = {
	board: PropTypes.array.isRequired,
	pause: PropTypes.bool.isRequired,
	showInitialScreen: PropTypes.bool.isRequired,
	turn: PropTypes.number.isRequired,
	score: PropTypes.objectOf(PropTypes.number).isRequired,
	isEnd: PropTypes.bool.isRequired,
	winner: PropTypes.string,
	hint: PropTypes.array.isRequired,
	players: PropTypes.object.isRequired,

	// boardHistory: PropTypes.instanceOf(Stack).isRequired
}