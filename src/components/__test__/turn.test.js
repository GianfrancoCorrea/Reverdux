import React from 'react';
import { mount, shallow } from 'enzyme';
import Turn from '../turn';
import { initialState } from '../../reducers/store';

const data = {
  turn: 1,
  players: initialState.players,
  actions: { switchTurn: jest.fn() },
};
describe('Turn test suite', () => {
  const wrapper = mount(<Turn {...data} />);
  test('should display player 1 name', () => {
    expect(wrapper.text()).toContain('Turn:  Player1 ');
  });
  test('should create a player1 coinClass', () => {
    expect(wrapper.find('.coin').hasClass('coin score__player--one')).toBe(true);
    wrapper.setProps({ turn: 2 });
    expect(wrapper.find('.coin').hasClass('coin score__player--two')).toBe(true);
  });
  test('should render a ButtonComponent', () => {
    expect(wrapper.find('.btn')).toHaveLength(1);
  });
});
describe('Record Turn', () => {
  data.isRecord = true;
  const wrapper = shallow(<Turn {...data} />);
  test('should display text of record turn', () => {
    expect(wrapper.text()).toEqual('Turn played by:  Player1');
  });
});

