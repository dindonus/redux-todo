import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Card from './Card';
import VisibleTodoList from '../containers/VisibleTodoList';
import AddTodo from '../containers/AddTodo';

const App = () => (
  <Card>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/add">Add</Link></li>
    </ul>
    <div className="App">
      <Switch>
        <Route exact path="/" component={VisibleTodoList} />
        <Route path="/add" component={AddTodo} />
      </Switch>
    </div>
  </Card>
);

export default App;
