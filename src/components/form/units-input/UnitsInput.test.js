import React from 'react';
import ReactDOM from 'react-dom';
import UnitsInput from './UnitsInput';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UnitsInput type="text" id="test" onChange={() => {}} units="mmHg" />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders units input correctly', () => {
  const component = renderer.create(
    <UnitsInput type="text" id="test" onChange={() => {}} units="mmHg" />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
