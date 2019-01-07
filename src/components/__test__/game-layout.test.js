import React from 'react';
import { mount } from 'enzyme';
import Gamelayout from '../game-layout';
import * as boardLibs from '../../libs/board-libs';
import { initialState } from '../../reducers/store';
import { List } from 'immutable';

const data = {
  actions: {
    pause: jest.fn(),
    newGame: jest.fn(),
    switchTurn: jest.fn(),
  },
  board: boardLibs.newBoard(),
  turn: 1,
  players: initialState.players,
  score: {
    player1: 4,
    player2: 1,
  },
  winner: '',
  isEnd: false,
  boardHistory: List([]),
  hint: boardLibs.hint(1, boardLibs.newBoard()),
};
const wrapper = mount(<Gamelayout {...data} />);
describe('GameLayout test suite', () => {
  test('should pause button component', () => {
    expect(wrapper.find('.btn--secondary')).toHaveLength(1);
  });
  test('should display Turn component', () => {
    expect(wrapper.text()).toContain('PASS');
  });
  test('should display Score component', () => {
    expect(wrapper.text()).toContain('Score');
  });
  test('should display Records component', () => {
    expect(wrapper.find('.records')).toHaveLength(1);
  });
  test('should display WinnerMessage component', () => {
    wrapper.setProps({ isEnd: true });
    expect(wrapper.text()).toContain('wins!');
  });
});
