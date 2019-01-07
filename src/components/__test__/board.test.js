import React from 'react';
import { mount } from 'enzyme';
import Board from '../board';
import * as boardLibs from '../../libs/board-libs';

const data = {
  board: boardLibs.newBoard(),
  hint: boardLibs.hint(1, boardLibs.newBoard()),
  actions: { makeMove: jest.fn() },
};
const wrapper = mount(<Board {...data} />);
describe('Board test suit', () => {
  test('should render 64 Cells components which 4 of them has .hint className', () => {
    expect(wrapper.find('.board__cell')).toHaveLength(64);
    expect(wrapper.find('.hint')).toHaveLength(4);
  });
});
