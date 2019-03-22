import React from 'react';
import PropTypes from 'prop-types';
import './Label.scss';

const Label = ({ children, htmlFor }) => (
  <label htmlFor={htmlFor}>{children}</label>
);

Label.propTypes = {
  children: PropTypes.node,
  htmlFor: PropTypes.string,
};

Label.defaultProps = {
  children: '',
  htmlFor: null,
};

export default Label;
