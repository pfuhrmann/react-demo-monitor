import React from 'react';

import './App.scss';
import TextHeader from '../text/header/TextHeader';
import TextMain from '../text/main/TextMain';

const App = () => (
  <div className="App">
    <header className="App-wrapper">
      <div className="App-box">
        <TextMain>Monitor</TextMain>
        <TextHeader>Your simple health tracker</TextHeader>
      </div>
    </header>
  </div>
);

export default App;
