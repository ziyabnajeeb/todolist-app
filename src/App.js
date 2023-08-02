import { useState } from 'react';
import './App.css';
import Todos from './components/Todos/Todos';
import CreateTodo from './components/CreateTodo/CreateTodo';

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodo = () => {
    const newTodoList = { id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1, todoName: newTodo, completed: false };
    setTodoList([...todoList, newTodoList]);
  };

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const completeTodo = (id) => {
    setTodoList(todoList.map((todo) => (todo.id === id ? { ...todo, completed: true } : todo)));
  };

  return (
    <div className='App'>
      <CreateTodo handleChange={handleChange} addTodo={addTodo} />

      {todoList.map((todo) => (
        <Todos key={todo.id} id={todo.id} todoName={todo.todoName} completed={todo.completed} completeTodo={completeTodo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
};

export default App;
