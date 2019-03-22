import React from 'react';
import ReactDOM from 'react-dom';
import TextMain from './TextMain';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TextMain />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly h1 tag with text', () => {
  const component = renderer.create(
    <TextMain>Header</TextMain>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
