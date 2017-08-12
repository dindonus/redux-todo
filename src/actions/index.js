let nextTodoId = 0;

const getId = () => {
  nextTodoId += 1;
  return nextTodoId;
};

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: getId(),
  text,
});

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id,
});
