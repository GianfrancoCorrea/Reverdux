import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';
import { bindActionCreators } from 'redux';
import * as gameActions from '../actions/gameActions';
import AppLayout from '../components/app-layout';
import GameLayout from '../components/game-layout';
import Menu from '../components/menu';
import RecordBoard from '../components/record-board';

class Game extends PureComponent {
  render() {
    const {
      showInitialScreen, pause, showRecord,
      score, players, recordBoard,
      turn, hint, board, actions,
      winner, boardHistory, isEnd,
    } = this.props;
    const menu = showInitialScreen || (pause && !showRecord);
    const playing = !pause && !showInitialScreen && !showRecord;
    return (
      <AppLayout>
        { menu && (
          <Menu
            pause={pause}
            show={showInitialScreen}
            score={score}
            players={players}
            actions={actions}
            showInitialScreen={showInitialScreen}
          />
        )}
        { showRecord && (
          <RecordBoard
            actions={actions}
            record={recordBoard}
            players={players}
          />
        )}
        { playing && (
          <GameLayout
            actions={actions}
            winner={winner}
            players={players}
            turn={turn}
            hint={hint}
            board={board}
            boardHistory={boardHistory}
            score={score}
            isEnd={isEnd}
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
  showRecord: state.showRecord,
  recordBoard: state.recordBoard,
});

export default connect(
  mapStateToProps,
  dispatch => ({
    actions: bindActionCreators(gameActions, dispatch),
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
  boardHistory: PropTypes.instanceOf(List).isRequired,
  actions: PropTypes.instanceOf(Object).isRequired,
  recordBoard: PropTypes.instanceOf(Object).isRequired,
  showRecord: PropTypes.bool.isRequired,
};
