import React from 'react';
import PropTypes from 'prop-types';
import './TextHeader.scss';

const TextHeader = ({ children }) => (
  <h2>{children}</h2>
);

TextHeader.propTypes = {
  children: PropTypes.node,
};

TextHeader.defaultProps = {
  children: '',
};

export default TextHeader;
