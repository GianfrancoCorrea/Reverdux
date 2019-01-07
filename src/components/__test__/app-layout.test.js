import React from 'react';
import { shallow } from 'enzyme';
import AppLayout from '../app-layout';

const wrapper = shallow(<AppLayout />);
describe('AppLayout test suite ', () => {
  test('should render correctly', () => {
    expect(wrapper.text()).toContain('REVERDUX');
  });
});
