import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button'
import Display from './components/Display'
import Result from './components/Result'
import { observer, inject } from 'mobx-react';
@inject("store")
@observer
class App extends Component {
  render() {
    return (
      <div className="App">
      <div id="calculator">
       <Display />
       <Result /> 
       <div className="calculator-buttons" >
          <Button class="operation-btn is-zero" symbol="C" />
          {/* <Button class="simple-btn" symbol="+/-" /> */}
          <Button class="operation-btn" symbol="%" />
          <Button class="operation-btn" symbol="/" />
          <Button class="simple-btn" symbol="7" />
          <Button class="simple-btn" symbol="8" />
          <Button class="simple-btn" symbol="9" />
          <Button class="operation-btn" symbol="*" />
          <Button class="simple-btn" symbol="4" />
          <Button class="simple-btn" symbol="5" />
          <Button class="simple-btn" symbol="6" />
          <Button class="operation-btn"  symbol="-" />
          <Button class="simple-btn" symbol="1" />
          <Button class="simple-btn" symbol="2" />
          <Button class="simple-btn" symbol="3" />
          <Button class="operation-btn" symbol="+" />
          <Button class="simple-btn is-zero" symbol="0" />
          <Button class="simple-btn" symbol="." />
          <Button class="operation-btn" symbol="=" />
          </div>
       </div>
      </div>
    );
  }
}

export default App;
