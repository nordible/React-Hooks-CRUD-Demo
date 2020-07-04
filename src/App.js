import React, { useState } from 'react';
import './App.css';
import Todo from './Todo/Todo';
import AddTodoForm from './Todo/AddTodoForm';

function App() {

  const ToDos = ({ todos }) => {
    debugger
    return todos.map((todo, index) => <Todo
      key={index}
      index={index}
      todo={todo}
      completeTodo={CompleteTodo}
      deleteTodo = {DeleteTodo}
    />);
  }

  const [todos, setTodos] = useState([
    { text: 'Learn react', isCompleted: false },
    { text: 'avoid sleeping again', isCompleted: false },
    { text: 'expert react hooks', isCompleted: false }
  ]);

  const AddTodo = (newTodo) => {
    debugger
    setTodos([...todos, { text: newTodo }]);
  }

  const CompleteTodo = (index) => {
    debugger
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }


  const DeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <div className="todo-list">
        <ToDos todos={todos} completeTodo={CompleteTodo} deleteTodo={DeleteTodo} />
        <AddTodoForm addTodo={AddTodo} />
      </div>
    </div>
  );
}

export default App;
