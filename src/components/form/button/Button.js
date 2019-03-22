import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Button.scss';

const Button = ({ children, className, ...otherProps }) => (
  <button className={cx('Form-btn', className)} {...otherProps}>{children}</button>
);

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Button.defaultProps = {
  children: '',
  className: '',
};

export default Button;
