import React from 'react';
import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";

const App = () => {
    return (
        <div className="d-flex justify-content-center flex-column">
            <h1 className="mt-2 text-center">TodoList</h1>
            <TodoForm/>
            <TodoList/>
        </div>
    );
};

export default App;