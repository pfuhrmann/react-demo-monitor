import React, { useState, useReducer } from 'react';
import dayjs from 'dayjs';

import './App.scss';
import { getDataIcon, makeId } from '../../helpers';
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
    const num = parseInt(value, 10);
    console.log(results);
    switch (type) {
      case ACTION_ADD:
        return [value, ...results];
      case ACTION_REMOVE:
        return results.filter((_, index) => index !== value);
      default:
        return results;
    }
  }, [{ sysInput: 1245, diaInput: 12895, created: dayjs(), id: makeId(32) }]);

  const submit = () => {
    dispatch({
      type: ACTION_ADD, value: {
        sysInput, diaInput, created: dayjs(), id: makeId(32)
      }
    });
    setSysInput('');
    setDiaInput('');
  }

  const renderForm = () => (
    <div className="App-box">
      <div className="App-form">
        <TextSubHeader className="App-category">Blood
          pressure</TextSubHeader>
        <InputGroup>
          <Label htmlFor="sys">Systolic</Label>
          <UnitsInput
            value={sysInput}
            onChange={e => setSysInput(parseInt(e.target.value, 10))}
            id="sys"
            units="mmHg"
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="dia">Diastolic</Label>
          <UnitsInput
            value={diaInput}
            onChange={e => setDiaInput(parseInt(e.target.value))}
            id="dia"
            units="mmHg"
          />
        </InputGroup>
        <Button onClick={submit}>Add measurement</Button>
      </div>
    </div>
  );

  const renderResults = () => (
    <div className="App-results">
      {results.map(({ sysInput, diaInput, created, id }, index, arr) => (
        <Result
          key={id}
          created={created}
          data={[
            {
              label: 'Sys.',
              value: sysInput,
              icon: getDataIcon(sysInput, arr[index+1] && arr[index+1].sysInput),
            }, {
              label: 'Dia.',
              value: diaInput,
              icon: getDataIcon(diaInput, arr[index+1] && arr[index+1].diaInput),
            },
          ]}
          onRemove={() => dispatch({ type: ACTION_REMOVE, value: index })} />
      ))}
    </div>
  );

  return (
    <div className="App">
      <div className="App-wrapper">
        <TextMain>Monitor</TextMain>
        <TextHeader>Your simple health tracker</TextHeader>
        {renderForm()}
        {renderResults()}
      </div>
    </div>
  );
}

export default App;
