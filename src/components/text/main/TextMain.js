import React from 'react';
import PropTypes from 'prop-types';
import './TextMain.scss';

const TextMain = ({ children }) => (
  <h1>{children}</h1>
);

TextMain.propTypes = {
  children: PropTypes.node,
};

TextMain.defaultProps = {
  children: '',
};

export default TextMain;
