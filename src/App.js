import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [currentTime, setCurrentTime] = useState(0);

  const getTime = () =>{
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    })
  }

  useEffect(() => {
    getTime();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p> Current Time is {currentTime} </p>
      </header>
    </div>
  );
}

export default App;
