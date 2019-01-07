import React from 'react';
import { mount } from 'enzyme';
import Menu from '../menu';
import { initialState } from '../../reducers/store';

const data = {
  pause: true,
  showInitialScreen: true,
  score: {
    player1: 4,
    player2: 1,
  },
  players: initialState.players,
  actions: {
    newGame: jest.fn(),
    restartGame: jest.fn(),
    switchTurn: jest.fn(),
    pause: jest.fn(),
  },
};
const wrapper = mount(<Menu {...data} />);
describe('Menu test suite', () => {
  test('should render components of initial screen (inputs)', () => {
    expect(wrapper.find('input')).toHaveLength(2);
    expect(wrapper.find('.btn')).toHaveLength(1);
  });
  test('should display pause menu', () => {
    wrapper.setProps({ showInitialScreen: false, pause: true });
    expect(wrapper.find('input')).toHaveLength(0);

    expect(wrapper.find('.score')).toHaveLength(1);
    expect(wrapper.find('.btn')).toHaveLength(3);
  });
});
