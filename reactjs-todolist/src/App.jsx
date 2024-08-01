import { useEffect, useState, useRef } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState('');
  const inputRef = useRef(null);

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }));
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleDeleteTodo(todoIndex) {
    const newTodoList = todos.filter((todo, index) => index !== todoIndex);
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleEditTodo(todoIndex) {
    const valueToBeEdited = todos[todoIndex];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(todoIndex);
    inputRef.current.focus();
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let localTodos = localStorage.getItem('todos');
    if (!localTodos) {
      return;
    }
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  return (
    <>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos}
        inputRef={inputRef}
      />
      <TodoList
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
        todos={todos}
        inputRef={inputRef}
      />
    </>
  );
}

export default App;
