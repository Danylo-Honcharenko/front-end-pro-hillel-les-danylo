import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";
import {useSelector} from "react-redux";

function App() {

    const todos = useSelector(state => state.todos.todos);

    return (
        <div className="d-flex justify-content-center flex-column">
            <h1 className="mt-2 text-center">TodoList</h1>
            <TodoForm/>
            <TodoList/>
            <div className="text-center mt-3">
                <h3>Загальна кількісить елементів: {todos.length}</h3>
            </div>
        </div>
    );
}

export default App;
