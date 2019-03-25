import React from 'react';
import ReactDOM from 'react-dom';
import Result from './Result';
import renderer from 'react-test-renderer';
import dayjs from 'dayjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSortUp } from '@fortawesome/free-solid-svg-icons';

library.add(faSortUp);

const el = <Result id={1} data={[
  { value: 'val', label: 'val', icon: null },
  { value: 'val2', label: 'val2', icon: <FontAwesomeIcon icon="sort-up" /> },
]} created={dayjs('2018-08-08')} />

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(el, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders component correctly', () => {
  const component = renderer.create(el);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
