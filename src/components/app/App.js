import React from 'react';

import './App.scss';
import TextHeader from '../text/header/TextHeader';
import TextMain from '../text/main/TextMain';
import Label from '../form/label/Label';
import TextSubHeader from '../text/sub-header/TextSubHeader';

const App = () => (
  <div className="App">
    <div className="App-wrapper">
      <TextMain>Monitor</TextMain>
      <TextHeader>Your simple health tracker</TextHeader>
      <div className="App-box">
        <div className="App-form">
          <TextSubHeader className="App-category">Blood pressure</TextSubHeader>
          <div className="form-group">
            <Label htmlFor="sys">Systolic</Label>
            <input type="text" id="sys" /> mmHg
          </div>
          <div className="form-group">
            <Label htmlFor="dia">Diastolic</Label>
            <input type="text" id="dia" /> mmHg
          </div>
          <button>Add measurement</button>
        </div>
        <div className="App-results">
          Results
        </div>
      </div>
    </div>
  </div>
);

export default App;
