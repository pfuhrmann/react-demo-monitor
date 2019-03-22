import React from 'react';

import './App.scss';
import TextHeader from '../text/header/TextHeader';
import TextMain from '../text/main/TextMain';
import Label from '../form/label/Label';
import TextSubHeader from '../text/sub-header/TextSubHeader';
import UnitsInput from '../form/units-input/UnitsInput';
import InputGroup from '../form/input-group/InputGroup';
import Button from '../form/button/Button';

const App = () => (
  <div className="App">
    <div className="App-wrapper">
      <TextMain>Monitor</TextMain>
      <TextHeader>Your simple health tracker</TextHeader>
      <div className="App-box">
        <div className="App-form">
          <TextSubHeader className="App-category">Blood pressure</TextSubHeader>
          <InputGroup>
            <Label htmlFor="sys">Systolic</Label>
            <UnitsInput type="text" id="sys" units="mmHg" onChange={()=>{}} />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="dia">Diastolic</Label>
            <UnitsInput type="text" id="dia" units="mmHg" onChange={()=>{}} />
          </InputGroup>
          <Button>Add measurement</Button>
        </div>

      </div>
    </div>
  </div>
);

export default App;
