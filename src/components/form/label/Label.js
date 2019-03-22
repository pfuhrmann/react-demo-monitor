import React from 'react';
import PropTypes from 'prop-types';
import './Label.scss';

const Label = ({ children, ...otherProps }) => (
  <label {...otherProps}>{children}</label>
);

Label.propTypes = {
  children: PropTypes.node,
};

Label.defaultProps = {
  children: '',
};

export default Label;
