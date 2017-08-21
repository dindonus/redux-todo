const initialState = [
  {
    id: 1,
    text: 'Prepare diner',
    completed: false,
  },
  {
    id: 2,
    text: 'Eat diner',
    completed: false,
  },
];

const todos = (state = initialState, action) => {
  const biggestId = state.reduce((carry, todo) => Math.max(carry, todo.id), 0);
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: biggestId + 1,
          text: action.text,
          completed: false,
        },
      ];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        ((todo.id === action.id)
          ? { ...todo, completed: !todo.completed }
          : todo),
      );
    default:
      return state;
  }
};

export default todos;
