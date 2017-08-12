import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import SingleInputForm from '../components/SingleInputForm';

const AddTodo = ({ name, occupation, onSubmit }) => (
  <SingleInputForm onSubmit={onSubmit} text="Add Todo" subtitle={`${name} is ${occupation}`} />
);

const mapStateToProps = state => ({
  name: 'Nicolas',
  occupation: 'passing props',
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (value) => {
    dispatch(addTodo(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
