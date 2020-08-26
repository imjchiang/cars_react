import React from 'react';
import logo from './mitsu_motors.png';
import './App.css';
import Evo from "./Evo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <br />
        <br />
        <a
          className="App-link"
          href="https://www.mitsubishicars.com/lancer-history"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about the Evo
        </a>
      </header>
      <Evo />
    </div>
  );
}

export default App;
