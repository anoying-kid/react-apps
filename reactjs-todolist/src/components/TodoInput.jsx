import React, { useRef } from 'react';

export default function TodoInput(props) {
    const { handleAddTodos, todoValue, setTodoValue, inputRef } = props;

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleAddTodos(todoValue);
            setTodoValue('');
        }
    };

    return (
        <header>
            <input
                ref={inputRef}
                value={todoValue}
                onChange={(e) => setTodoValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder='Enter todo....'
            />
            <button onClick={() => {
                handleAddTodos(todoValue);
                setTodoValue('');
            }}>Add</button>
        </header>
    );
}
