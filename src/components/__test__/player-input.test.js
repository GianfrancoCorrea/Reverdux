import React from 'react';
import { mount } from 'enzyme';
import PlayerInput from '../player-input';

const data = {
  forPlayer: 'Player1',
  actions: { playerName: jest.fn() },
};
const wrapper = mount(<PlayerInput {...data} />);
describe('PlayerInput test suite', () => {
  test('keyUp test event', () => {
    const value = 'PlayerName';
    const event = { target: { value } };
    wrapper.find('input').simulate('keyUp', event);
    expect(data.actions.playerName).toHaveBeenCalledWith(event.target.value, data.forPlayer);
  });
});
