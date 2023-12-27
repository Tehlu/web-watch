import React, { useState, useRef } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  const [timer, setTimer] = useState(0);
  const [laps, setLaps] = useState([]);
  const countRef = useRef(null);

  const handleStart = () => {
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 10);
  };

  const handleStop = () => {
    clearInterval(countRef.current);
  };

  const handleReset = () => {
    clearInterval(countRef.current);
    setTimer(0);
    setLaps([]);
  };

  const handleLap = () => {
    setLaps([...laps, timer]);
  };

  return (
    <div className="App">
      <header className='App-header'>
        <img src={logo} className='App-logo' alt="logo"/>
      <h1>Stopwatch</h1>
      <span>{(timer/100).toFixed(2)}</span>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleLap}>Lap</button>
      {laps.map(time => (
        <p>{(time/100).toFixed(2)}</p>
      ))}
    </header>
    </div>
    
  );
}

export default App;
