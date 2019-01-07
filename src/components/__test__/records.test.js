import React from 'react';
import { shallow } from 'enzyme';
import Records from '../records';
import { initialState } from '../../reducers/store';
import { List } from 'immutable';
import * as boardLibs from '../../libs/board-libs';

describe('records test suite', () => {
  const data = {
    actions: { showRecord: jest.fn() },
    players: initialState.players,
    boardHistory: List([
      { id: 0, boardState: boardLibs.newBoard(), player: 1 },
      { id: 1, boardState: boardLibs.newBoard(), player: 1 },
      { id: 2, boardState: boardLibs.newBoard(), player: 2 },
    ]),
  };
  const wrapper = shallow(<Records {...data} />);
  test('should display text on badges for each turn played', () => {
    const texts = wrapper.find('.badge').map(node => node.text());
    expect(texts).toEqual(['#2 -  Move Player2', '#1 -  Move Player1', '#0 -  Start']);
  });
  const badges = wrapper.find('.badge').map(node => node);
  test('should display correct classes', () => {
    expect(badges[0].hasClass('badge-light')).toBe(true);
    expect(badges[1].hasClass('badge-dark')).toBe(true);
    expect(badges[2].hasClass('badge-info')).toBe(true);
  });
  test('simulate badge click ', () => {
    wrapper.find('.badge-info').parent().simulate('click');
    expect(data.actions.showRecord).toHaveBeenCalledWith(data.boardHistory.toJS()[0]);
  });
});
