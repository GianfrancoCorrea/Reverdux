import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/gameActions';
import AppLayout from '../components/app-layout';
import GameLayout from '../components/game-layout';
import Menu from '../components/menu';

class Game extends PureComponent {
  render() {
    return (
      <AppLayout>
        {this.props.showInitialScreen === true ? (
          <Menu
            pause={this.props.pause}
            show={this.props.showInitialScreen}
            score={this.props.score}
            players={this.props.players}
            actions={this.props.actions}
          />
        ) : (
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
            showRecordMap={this.props.showRecordMap}
          />
        )}
      </AppLayout>
    );
  }
}

const mapStateToProps = state => ({
  board: state.board,
  turn: state.turn,
  showInitialScreen: state.showInitialScreen,
  score: state.score,
  pause: state.pause,
  isEnd: state.isEnd,
  winner: state.winner,
  boardHistory: state.boardHistory,
  players: state.players,
  hint: state.hint,
  showRecordMap: state.showRecordMap,
});

export default connect(
  mapStateToProps,
  dispatch => ({
    actions: bindActionCreators(actions, dispatch),
  }),
)(Game);

Game.propTypes = {
  board: PropTypes.arrayOf(PropTypes.number).isRequired,
  pause: PropTypes.bool.isRequired,
  showInitialScreen: PropTypes.bool.isRequired,
  turn: PropTypes.number.isRequired,
  score: PropTypes.objectOf(PropTypes.number).isRequired,
  isEnd: PropTypes.bool.isRequired,
  winner: PropTypes.string.isRequired,
  hint: PropTypes.arrayOf(PropTypes.number).isRequired,
  players: PropTypes.objectOf(PropTypes.object).isRequired,

  // boardHistory: PropTypes.instanceOf(Stack).isRequired
};
