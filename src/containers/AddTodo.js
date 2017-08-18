import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTodo } from '../actions';
import SingleInputForm from '../components/SingleInputForm';

const AddTodo = ({ name, occupation, onSubmit }) => (
  <SingleInputForm onSubmit={onSubmit} text="Add Todo" />
);

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  onSubmit: (value) => {
    dispatch(addTodo(value));
  },
});

AddTodo.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
