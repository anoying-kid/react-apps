import React from 'react';
import TodoCard from './TodoCard';

export default function TodoList(props) {
    const { todos, inputRef, handleEditTodo, handleDeleteTodo } = props;
    return (
        <ul className='main'>
            {todos.map((todo, todoIndex) => (
                <TodoCard
                    key={todoIndex}
                    index={todoIndex}
                    handleEditTodo={handleEditTodo}
                    handleDeleteTodo={handleDeleteTodo}
                    inputRef={inputRef}
                >
                    <p>{todo}</p>
                </TodoCard>
            ))}
        </ul>
    );
}
