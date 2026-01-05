import React, {useContext} from 'react';
import {TodoListContext} from "../todoContext.js";

const TodoList = () => {

    const [todo] = useContext(TodoListContext);

    return (
        <div>
            {todo.map((todoItem, index) => (
                <div key={index} className="mt-2 bg-light p-3 rounded">
                    <p>{todoItem.todoName}</p>
                </div>
            ))}
        </div>
    );
};

export default TodoList;