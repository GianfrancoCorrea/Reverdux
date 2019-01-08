import React from 'react';
import { shallow } from 'enzyme';
import Menu from '../../components/menu';
import { initialState } from '../../reducers/store';
import Game from '../game';
import configureStore from 'redux-mock-store';
import RecordBoard from '../../components/record-board';
import GameLayout from '../../components/game-layout';

const middlewares = [];
const mockStore = configureStore(middlewares);

function getMockedStoreWithKey(modifyKey) {
  const state = { ...initialState, ...modifyKey };
  return mockStore(state);
}

describe('Game container test suite', () => {
  test('should display only Menu', () => {
    const wrapper = shallow(<Game store={getMockedStoreWithKey()} />).dive();
    expect(wrapper.find(Menu).exists()).toBe(true);
    expect(wrapper.find(RecordBoard).exists()).toBe(false);
    expect(wrapper.find(GameLayout).exists()).toBe(false);
  });
  test('should display only GameLayout', () => {
    const key = {
      pause: false,
      showInitialScreen: false,
      showRecord: false,
    };
    const wrapper = shallow(<Game store={getMockedStoreWithKey(key)} />).dive();
    expect(wrapper.find(Menu).exists()).toBe(false);
    expect(wrapper.find(RecordBoard).exists()).toBe(false);
    expect(wrapper.find(GameLayout).exists()).toBe(true);
  });
  test('should display only RecordBoard', () => {
    const key = {
      pause: true,
      showInitialScreen: false,
      showRecord: true,
    };
    const wrapper = shallow(<Game store={getMockedStoreWithKey(key)} />).dive();
    expect(wrapper.find(Menu).exists()).toBe(false);
    expect(wrapper.find(RecordBoard).exists()).toBe(true);
    expect(wrapper.find(GameLayout).exists()).toBe(false);
  });
  test('should not display component with all true', () => {
    const key = {
      pause: true,
      showInitialScreen: true,
      showRecord: true,
    };
    const wrapper = shallow(<Game store={getMockedStoreWithKey(key)} />).dive();
    expect(wrapper.find(Menu).exists()).toBe(false);
    expect(wrapper.find(RecordBoard).exists()).toBe(false);
    expect(wrapper.find(GameLayout).exists()).toBe(false);
  });
});
