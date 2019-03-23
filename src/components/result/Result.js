import React from 'react';
import PropTypes from 'prop-types';
import dayjs from '../app/App';

import './Result.scss';
import TextSubHeader from '../text/sub-header/TextSubHeader';
import Label from '../form/label/Label';
import Button from '../form/button/Button';

const Result = (id, data, created, onRemove) => (
  <div >
    <TextSubHeader>
      { dayjs(created).format('YYYY-MM-DD (HH:mm)') }
    </TextSubHeader>
    <div className="App-data">
      {data.map(({ key, value }) => (
        <div key={key}><Label>{key}</Label> {value} mmHg</div>
      ))}
    </div>
    <Button as="link" onClick={() => onRemove}>Remove</Button>
  </div>
);

Result.propTypes = {
  id: PropTypes.string.isRequired,
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
