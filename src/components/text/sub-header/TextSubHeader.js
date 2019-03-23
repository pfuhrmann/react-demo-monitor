import React from 'react';
import PropTypes from 'prop-types';
import './TextSubHeader.scss';

const TextSubHeader = ({ children, className, ...otherProps }) => (
  <h2 className={className} {...otherProps}>{children}</h2>
);

TextSubHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

TextSubHeader.defaultProps = {
  children: '',
  className: '',
};

export default TextSubHeader;
