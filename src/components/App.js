import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './App.css';
import AddTodo from '../containers/AddTodo';
import Footer from '../components/Footer';
import VisibleTodoList from '../containers/VisibleTodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>My Redux app</h2>
        </div>
        <p className="App-intro">
          Header
        </p>
        <VisibleTodoList />
        <AddTodo name="Nicolas" />
        <Footer />
      </div>
    );
  }
}

export default App;
