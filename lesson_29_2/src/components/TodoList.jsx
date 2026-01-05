import React from 'react';
import {useSelector} from "react-redux";

const TodoList = () => {

    const todos = useSelector(state => state.todos.todos);

    return (
        <div className="d-flex justify-content-center align-items-center flex-column">
            {todos.map((todoItem, index) => (
                <div key={index} className="mt-2 bg-light p-3 rounded w-25">
                    <p>{todoItem.taskName}</p>
                </div>
            ))}
        </div>
    );
};

export default TodoList;