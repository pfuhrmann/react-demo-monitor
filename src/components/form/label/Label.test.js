import React from 'react';
import ReactDOM from 'react-dom';
import Label from './Label';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Label htmlFor="field">Some label</Label>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders label correctly', () => {
  const component = renderer.create(
    <Label htmlFor="field">Some label</Label>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
