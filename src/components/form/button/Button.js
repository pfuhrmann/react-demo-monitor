import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Button.scss';

const Button = ({ children, className, as, ...otherProps }) => (
  <button
    className={cx({
      'Form-btn': as === 'button',
      'Form-btn-link': as === 'link',
    }, className)}
    {...otherProps}
  >{children}</button>
);

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
};

Button.defaultProps = {
  children: '',
  className: '',
  as: 'button',
};

export default Button;
