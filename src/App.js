import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Timeline} from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Timeline />
      </div>
    );
  }
}

export default App;
