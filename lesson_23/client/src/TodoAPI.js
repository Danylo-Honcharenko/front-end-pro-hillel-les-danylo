export class TodoAPI {
    createTodo = async (data) => {
        const response = await fetch('http://localhost:8080/api/todo/create', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        return await response.json();
    }

    getAllTodos = async () => {
        const response = await fetch('http://localhost:8080/api/todos');
        return await response.json();
    }

    updateTodo = async (data) => {
        const response = await fetch('http://localhost:8080/api/todo/update', {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        return await response.json();
    }

    deleteTodo = async (id) => {
        const response = await fetch(`http://localhost:8080/api/todo/delete?id=${id}`, {
            method: 'DELETE'
        })
        return await response.json();
    }
}