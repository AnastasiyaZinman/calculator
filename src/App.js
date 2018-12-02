import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div id="calculator">
       <div className="screen"></div>
       <div className="calculator-buttons">
          <button className="simple-btn">C</button>
          <button className="simple-btn">+/-</button>
          <button className="simple-btn">%</button>
          <button className="operation-btn">/</button>
          <button className="simple-btn">7</button>
          <button className="simple-btn">8</button>
          <button className="simple-btn">9</button>
          <button className="operation-btn">*</button>
          <button className="simple-btn">4</button>
          <button className="simple-btn">5</button>
          <button className="simple-btn">6</button>
          <button className="operation-btn">-</button>
          <button className="simple-btn">1</button>
          <button className="simple-btn">2</button>
          <button className="simple-btn">3</button>
          <button className="operation-btn">+</button>
          <button className="simple-btn is-zero">0</button>
          <button className="simple-btn">.</button>
          <button className="operation-btn">=</button>
          </div>
       </div>
      </div>
    );
  }
}

export default App;
