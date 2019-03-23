import React from 'react';
import PropTypes from 'prop-types';
import './TextHeader.scss';

const TextHeader = ({ children, className, ...otherProps }) => (
  <h2 className={className} {...otherProps}>{children}</h2>
);

TextHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

TextHeader.defaultProps = {
  children: '',
  className: '',
};

export default TextHeader;
