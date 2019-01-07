import React from 'react';
import { mount } from 'enzyme';
import WinnerMessage from '../winner-message';

describe('WinnerMessage component test suite', () => {
  const data = {
    winner: 'player1',
    actions: { newGame: jest.fn() },
  };
  const wrapper = mount(<WinnerMessage {...data} />);
  test('Should render a ButtonComponent child', () => {
    expect(wrapper.find('.btn')).toHaveLength(1);
  });
  test('should display winner player text', () => {
    expect(wrapper.text()).toContain('player1 wins!');
  });
});

