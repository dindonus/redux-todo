import React from 'react';
import Card from './Card';
import VisibleTodoList from '../containers/VisibleTodoList';
import AddTodo from '../containers/AddTodo';
import Footer from '../components/Footer';

const App = () => (
  <Card>
    <div className="App">
      <VisibleTodoList />
      <AddTodo />
      <Footer />
    </div>
  </Card>
);

export default App;
