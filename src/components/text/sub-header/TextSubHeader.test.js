import React from 'react';
import ReactDOM from 'react-dom';
import TextSubHeader from './TextSubHeader';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TextSubHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly h3 tag with text', () => {
  const component = renderer.create(
    <TextSubHeader>Header</TextSubHeader>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with custom class', () => {
  const component = renderer.create(
    <TextSubHeader className="test-class">Header</TextSubHeader>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
