import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTodo } from '../actions';
import SingleInputForm from '../components/SingleInputForm';

const AddTodo = ({ name, occupation, onSubmit }) => (
  <SingleInputForm onSubmit={onSubmit} text="Add Todo" subtitle={`${name} is ${occupation}`} />
);

const mapStateToProps = () => ({
  name: 'Nicolas',
  occupation: 'passing props',
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (value) => {
    dispatch(addTodo(value));
  },
});

AddTodo.propTypes = {
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
