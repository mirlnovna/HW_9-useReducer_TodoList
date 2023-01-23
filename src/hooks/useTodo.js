import { useEffect, useReducer } from "react";
import todoReducer from "./../reducer/todoreducer";

export const useTodo = () => {
  const initialState = [];

  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  const todosCount = todos.length;

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "ADD_TODO",
      payload: todo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    const action = {
      type: "DELETE_TODO",
      payload: id,
    };

    dispatch(action);
  };

  const handleCompleteTodo = (id) => {
    const action = {
      type: "COMPLETE_TODO",
      payload: id,
    };

    dispatch(action);
  };

  const handleUpdateTodo = (id, description) => {
    const action = {
      type: "UPDATE_TODO",
      payload: {
        id,
        description,
      },
    };

    dispatch(action);
  };

  return {
    todos,
    todosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo,
  };
};
