import React from 'react';
import { mount } from 'enzyme';
import RecordBoard from '../record-board';
import { initialState } from '../../reducers/store';
import * as boardLibs from '../../libs/board-libs';

describe('RecordBoard test suite', () => {
  const data = {
    actions: {
      showRecord: jest.fn(),
      pause: jest.fn(),
    },
    players: initialState.players,
    record: { id: 0, boardState: boardLibs.newBoard(), player: 1 },
  };
  const wrapper = mount(<RecordBoard {...data} />);
  test('should render all childrens correctly', () => {
    expect(wrapper.find('.btn')).toHaveLength(1);
    expect(wrapper.find('.score__player--one')).toHaveLength(1);
    expect(wrapper.find('.board')).toHaveLength(1);
  });
});
