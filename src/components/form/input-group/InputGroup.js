import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './InputGroup.scss';

const InputGroup = ({ children, className, ...otherProps }) => (
  <div className={cx('Form-input-group', className)} {...otherProps}>
    { children }
  </div>
);

InputGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

InputGroup.defaultProps = {
  children: '',
  className: '',
};

export default InputGroup;
