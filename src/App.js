import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todo Application</h2>
        </div>
        <p className="App-intro">
           <code>Hello World</code> 
        </p>
      </div>
    );
  }
}

export default App;
