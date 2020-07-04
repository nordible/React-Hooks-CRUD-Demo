import React, { useState } from 'react';

const AddTodoForm = ({ addTodo }) => {

    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        debugger
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('');
    }

    return (<form onSubmit={handleSubmit} >
        <input type="text" onChange={(e) => setValue(e.target.value)} />
        <button type="submit">Add todo</button>
    </form>);
}

export default AddTodoForm;