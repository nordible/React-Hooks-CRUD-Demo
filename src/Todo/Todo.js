import React from 'react';
const Todo = ({ todo, index, completeTodo , deleteTodo}) => {
    debugger
    return <>
        <div className='todo' style={{ textDecoration: todo.isCompleted === true ? 'line-through' : '' }}>{todo.text}</div>
        <button onClick={() => { completeTodo(index) }}>Complete task</button>
        <button onClick={() => { deleteTodo(index) }}>Delete task</button>
    </>;
}
export default Todo;