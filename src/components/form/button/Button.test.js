import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button htmlFor="field">Some label</Button>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders button correctly', () => {
  const component = renderer.create(
    <Button htmlFor="field">Some label</Button>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
