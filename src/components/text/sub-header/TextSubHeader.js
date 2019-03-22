import React from 'react';
import PropTypes from 'prop-types';
import './TextSubHeader.scss';

const TextSubHeader = ({ children, className }) => (
  <h3 className={className}>{children}</h3>
);

TextSubHeader.propTypes = {
  children: PropTypes.node,
};

TextSubHeader.defaultProps = {
  children: '',
};

export default TextSubHeader;
