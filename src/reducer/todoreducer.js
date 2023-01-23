const todoreducer = (initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...initialState, action.payload];

    case "DELETE_TODO":
      return initialState.filter((todo) => todo.id !== action.payload);

    case "COMPLETE_TODO":
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }

        return todo;
      });

    case "UPDATE_TODO":
      return initialState.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            description: action.payload.description,
          };
        }

        return todo;
      });

    default:
      return initialState;
  }
};
export default todoreducer;
