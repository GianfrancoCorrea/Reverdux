import React from 'react';
import { shallow } from 'enzyme';
import Score from '../score';
import { initialState } from '../../reducers/store';

describe('Score test suite', () => {
  const data = {
    players: initialState.players,
    score: {
      player1: 4,
      player2: 1,
    },
  };
  const wrapper = shallow(<Score {...data} />);
  test('should display score "4" for player 1', () => {
    expect(wrapper.text()).toContain('Player1: 4');
    expect(wrapper.text()).toContain('Player2: 1');
  });
});
