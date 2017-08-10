import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './App.css';
import AddTodo from '../containers/AddTodo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>My Redux app!</h2>
        </div>
        <p className="App-intro">
          Header
        </p>
        <AddTodo name="Nicolas" />
      </div>
    );
  }
}

export default App;
