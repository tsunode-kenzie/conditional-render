import Bulb from './components/Bulb';
import Switch from './components/Switch';

import { useState } from 'react';

import './App.css';
import Button from './components/Button';

const App = () => {
  const [isLight, setIsLight] = useState(true);

  function consoleOla() {
    console.log('ola');
  }

  return (
    <div className="App">
      <header className='App-header'>
        <Bulb isLight={isLight} />
        {isLight}
        <Switch setIsLight={setIsLight} isAbacaxi={true} />
        <Button onClick={consoleOla} />
      </header>
    </div>
  );
}

export default App;
