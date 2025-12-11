export class TodoAPI {
    #API_URL = "http://localhost:8080/api";

    createTodo = async (data) => {
        const response = await fetch(`${this.#API_URL}/todo/create`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        return await response.json();
    }

    getAllTodos = async () => {
        const response = await fetch(`${this.#API_URL}/todos`);
        return await response.json();
    }

    updateTodo = async (data) => {
        const response = await fetch(`${this.#API_URL}/todo/update`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        return await response.json();
    }

    deleteTodo = async (id) => {
        const response = await fetch(`${this.#API_URL}/todo/delete?id=${id}`, {
            method: 'DELETE'
        })
        return await response.json();
    }
}