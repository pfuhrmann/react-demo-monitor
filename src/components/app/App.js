import React, { useState, useReducer, Fragment } from 'react';
import dayjs from 'dayjs';

import './App.scss';
import { getAverage, getDataIcon, makeId, parseIntInput } from '../../helpers';
import TextHeader from '../text/header/TextHeader';
import TextMain from '../text/main/TextMain';
import Label from '../form/label/Label';
import TextSubHeader from '../text/sub-header/TextSubHeader';
import UnitsInput from '../form/units-input/UnitsInput';
import InputGroup from '../form/input-group/InputGroup';
import Button from '../form/button/Button';
import Result from '../result/Result';

const ACTION_ADD = 'add';
const ACTION_REMOVE = 'remove';

const App = () => {
  const [sysInput, setSysInput] = useState('');
  const [diaInput, setDiaInput] = useState('');

  const [results, dispatch] = useReducer((results, { type, value }) => {
    switch (type) {
      case ACTION_ADD:
        return [value, ...results];
      case ACTION_REMOVE:
        return results.filter((_, index) => index !== value);
      default:
        return results;
    }
  }, []);

  const submit = () => {
    if (sysInput !== '' || diaInput !== '') {
      dispatch({
        type: ACTION_ADD, value: {
          sys: sysInput, dia: diaInput, created: dayjs(), id: makeId(32)
        }
      });
      setSysInput('');
      setDiaInput('');
    }
  }

  const renderForm = () => (
    <div className="App-form">
      <TextSubHeader className="App-category">Blood pressure</TextSubHeader>
      <InputGroup>
        <Label htmlFor="sys">Systolic</Label>
        <UnitsInput
          value={sysInput}
          onChange={e => setSysInput(parseIntInput(e.target.value))}
          id="sys"
          units="mmHg"
        />
      </InputGroup>
      <InputGroup>
        <Label htmlFor="dia">Diastolic</Label>
        <UnitsInput
          value={diaInput}
          onChange={e => setDiaInput(parseIntInput(e.target.value))}
          id="dia"
          units="mmHg"
        />
      </InputGroup>
      <Button onClick={submit}>Add measurement</Button>
    </div>
  );

  const renderAverages = () => (
    <Fragment>
      <TextSubHeader>Averages</TextSubHeader>
      <div>
        <Label>Systolic (mmHg)</Label>
        <span>{getAverage(results, 'sys')}</span>
      </div>
      <div>
        <Label>Diastolic (mmHg)</Label>
        <span>{getAverage(results, 'dia')}</span>
      </div>
    </Fragment>
  );

  const renderResults = () => (
    results.map(({ sys, dia, created, id }, index, arr) => (
      <Result
        key={id}
        created={created}
        data={[
          {
            label: 'Sys. (mmHg)',
            value: sys,
            icon: getDataIcon(sys, arr[index+1] && arr[index+1].sys),
          }, {
            label: 'Dia. (mmHg)',
            value: dia,
            icon: getDataIcon(dia, arr[index+1] && arr[index+1].dia),
          },
        ]}
        onRemove={() => dispatch({ type: ACTION_REMOVE, value: index })} />
    ))
  );

  return (
    <div className="App">
      <div className="App-wrapper">
        <TextMain>Monitor</TextMain>
        <TextHeader>Your simple health tracker</TextHeader>
        <div className="App-box">
          {renderForm()}
        </div>
        <div className="App-box App-average">
          {renderAverages()}
        </div>
        <div className="App-results">
          {renderResults()}
        </div>
      </div>
    </div>
  );
}

export default App;
