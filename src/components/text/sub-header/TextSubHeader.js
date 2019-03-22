import React from 'react';
import PropTypes from 'prop-types';
import './TextSubHeader.scss';

const TextSubHeader = ({ children, className }) => (
  <h3 className={className}>{children}</h3>
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
