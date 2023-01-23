import "./App.css";
import TodoForm from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { useTodo } from "./hooks/useTodo";

function App() {
  const {
    todos,
    todosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo,
  } = useTodo();

  return (
    <>
      <div className="card-to-do">
        <h1>Todo List</h1>
        <div className="counter-todos">
          <h3>
            List : <span>{todosCount}</span>
          </h3>
        </div>

        <div className="add-todo">
          <TodoForm handleNewTodo={handleNewTodo} />
        </div>

        <TodoList
          todos={todos}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
        />
      </div>
    </>
  );
}

export default App;
