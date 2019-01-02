import React from 'react';
import { shallow } from 'enzyme';
import Cell from '../cell';

describe('Cell Component Test Suite', () => {
  test('Cell color for player 1', () => {
    const data = {
      owner: 1,
      actions: { action: () => {} },
      cell: 27,
    };
    const wrapper = shallow(<Cell owner={data.owner} actions={data.actions} cell={data.cell} />);
    expect(wrapper.find('.board__cell').hasClass('board__cell--player1')).toBe(true);
  });
});
