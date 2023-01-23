import React from "react";
import useForm from "../hooks/useForm";
import { FORM } from "../assets/Global";

const TodoForm = ({ handleNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (description.length <= 1) return;

    let newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };

    handleNewTodo(newTodo);
    onResetForm();
  };

  return (
    <FORM>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          className="input-add"
          name="description"
          value={description}
          onChange={onInputChange}
          placeholder="Введите дел . . . ."
        />

        <button className="btn-add" type="submit">
          Добавить
        </button>
      </form>
    </FORM>
  );
};
export default TodoForm;
