import React from 'react';
import ReactDOM from 'react-dom';
import TextHeader from './TextHeader';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TextHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly h2 tag with text', () => {
  const component = renderer.create(
    <TextHeader>Header</TextHeader>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
