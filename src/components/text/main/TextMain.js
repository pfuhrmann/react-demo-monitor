import React from 'react';
import PropTypes from 'prop-types';
import './TextMain.scss';

const TextMain = ({ children, className, ...otherProps }) => (
  <h2 className={className} {...otherProps}>{children}</h2>
);

TextMain.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

TextMain.defaultProps = {
  children: '',
  className: '',
};

export default TextMain;
