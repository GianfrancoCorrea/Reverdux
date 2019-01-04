import React from 'react';
import { shallow } from 'enzyme';
import Cell from '../cell';

describe('Cell Component Test Suite', () => {
  const data = {
    owner: 1,
    actions: { makeMove: jest.fn() },
    cell: 27,
  };
  test('Cell color for player 1', () => {
    const wrapper = shallow(<Cell owner={data.owner} actions={data.actions} cell={data.cell} />);
    expect(wrapper.find('.board__cell').hasClass('board__cell--player1')).toBe(true);
  });
  test('cell color for player 2', () => {
    data.owner = 2;
    const wrapper = shallow(<Cell owner={data.owner} actions={data.actions} cell={data.cell} />);
    expect(wrapper.find('.board__cell').hasClass('board__cell--player2')).toBe(true);
  });
  test('color for unowned cell', () => {
    data.owner = 0;
    const wrapper = shallow(<Cell owner={data.owner} actions={data.actions} cell={data.cell} />);
    expect(wrapper.find('.board__cell').hasClass('board__cell ')).toBe(true);
  });
  test('color for hint cell', () => {
    data.owner = 0; data.cell = 19;
    const wrapper = shallow(<Cell owner={data.owner} actions={data.actions} cell={data.cell} isHint />);
    expect(wrapper.find('.board__cell').hasClass('board__cell hint')).toBe(true);
  });
  test('simulate cell click', () => {
    const wrapper = shallow(<Cell owner={data.owner} actions={data.actions} cell={data.cell} isHint />);
    wrapper.find('.board__cell').simulate('click');
    expect(data.actions.makeMove).toBeCalledWith(data.cell);
  });
  test('simulate cell keyDown', () => {
    const wrapper = shallow(<Cell owner={data.owner} actions={data.actions} cell={data.cell} isHint />);
    wrapper.find('.board__cell').simulate('keyDown', { keyCode: 13 });
    expect(data.actions.makeMove).toBeCalledWith(data.cell);

    data.actions.makeMove.mockReset();
    wrapper.find('.board__cell').simulate('keyDown', { keyCode: 14 });
    expect(data.actions.makeMove).not.toBeCalled();
  });
});
