import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, completed, text }) => {
  const style = { textDecoration: completed ? 'line-through' : 'none' };
  return (
    <li style={style}>
      <button onClick={onClick}>mark as {completed ? 'undone' : 'done'}</button> {text}
    </li>
  );
};

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
