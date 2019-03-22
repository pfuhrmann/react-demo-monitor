import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './UnitsInput.scss';

const UnitsInput = ({ units, className, ...otherProps }) => (
  <span className={cx('Form-units-input', className)}>
    <input {...otherProps} /> {units}
  </span>
);

UnitsInput.propTypes = {
  units: PropTypes.string,
  className: PropTypes.string,
};

UnitsInput.defaultProps = {
  units: '',
  className: '',
};

export default UnitsInput;
