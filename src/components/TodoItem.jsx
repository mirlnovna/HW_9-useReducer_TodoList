import React from "react";
import { FaTrash } from "react-icons/fa";
import TodoUpdate from "./todoUpdate/TodoUpdate";
import { StyleList } from "../assets/Global";

const TodoItem = ({
  todo,
  handleUpdateTodo,
  handleDeleteTodo,
  handleCompleteTodo,
}) => {
  return (
    <StyleList>
      <li>
        <span onClick={() => handleCompleteTodo(todo.id)}>
          <label
            className={`container-done ${todo.done ? "active" : ""}`}
          ></label>
        </span>
        <TodoUpdate todo={todo} handleUpdateTodo={handleUpdateTodo} />
        <button
          className="btn-delete"
          onClick={() => handleDeleteTodo(todo.id)}
        >
          <FaTrash />
        </button>
      </li>
    </StyleList>
  );
};
export default TodoItem;
