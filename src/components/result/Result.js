import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

import './Result.scss';
import TextSubHeader from '../text/sub-header/TextSubHeader';
import Label from '../form/label/Label';
import Button from '../form/button/Button';

const Result = ({ data, created, onRemove }) => (
  <div className="Result">
    <div className="App-box">
      <TextSubHeader>
        { dayjs(created).format('YYYY-MM-DD (HH:mm)') }
      </TextSubHeader>
      <div className="Result-data">
        {data.map(({ label, value, icon }) => (
          <div key={label}>
            <Label>{label}</Label>
            <span>{value} {icon}</span>
          </div>
        ))}
      </div>
      <Button as="link" onClick={onRemove}>Remove</Button>
    </div>
  </div>
);

Result.propTypes = {
  data: PropTypes.array,
  created: PropTypes.object,
  onRemove: PropTypes.func,
};

Result.defaultProps = {
  data: [],
  created: dayjs(),
  onRemove: () => {},
};

export default Result;
