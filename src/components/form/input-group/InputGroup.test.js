import React from 'react';
import ReactDOM from 'react-dom';
import InputGroup from './InputGroup';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InputGroup><input /></InputGroup>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders input group correctly', () => {
  const component = renderer.create(
    <InputGroup><input /></InputGroup>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
