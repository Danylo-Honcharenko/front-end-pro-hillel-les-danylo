import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";
import {TodoListContext} from "./todoContext.js";
import {useState} from "react";

function App() {

    const todo = useState([]);

    return (
      <TodoListContext value={todo}>
          <div className="container">
              <h1 className="mt-2 text-center">TodoList</h1>
              <TodoForm />
              <TodoList />
          </div>
      </TodoListContext>
  );
}

export default App;
