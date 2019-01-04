import React from 'react';
import { shallow } from 'enzyme';
import ButtonComponent from '../button';

describe('Button component test suite', () => {
  const data = {
    styleBtn: 'primary',
    message: 'test button',
    actions: jest.fn(),
  };
  const wrapper = shallow(<ButtonComponent {...data} />);
  test('className test', () => {
    expect(wrapper.find('.btn').hasClass('btn--primary')).toBe(true);
  });
  test('message test', () => {
    expect(wrapper.find('.btn').text()).toEqual('test button');
  });
  test('action click test', () => {
    wrapper.simulate('click');
    expect(data.actions).toBeCalled();
  });
  test('action keyDown Enter test', () => {
    wrapper.simulate('keyDown', { keyCode: 13 });
    expect(data.actions).toBeCalled();

    data.actions.mockClear();
    wrapper.simulate('keyDown', { keyCode: 14 });
    expect(data.actions).not.toBeCalled();
  });
});
