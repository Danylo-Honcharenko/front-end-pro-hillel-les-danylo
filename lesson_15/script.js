let todo = [
    {
        id: 1,
        text: "Text 1",
        done: false
    },
    {
        id: 2,
        text: "Text 2",
        done: true
    }
];

const getPreparedLiList = (todo) => {
    return todo.map((todo) => {
        const li = document.createElement("li");
        const input = document.createElement("input");
        const span = document.createElement("span");
        const button = document.createElement("button");

        li.classList.add("todo-item");
        li.dataset.todoId = todo.id;
        input.type = "checkbox";
        input.textContent = "!";
        span.classList.add("todo-item__description");
        span.textContent = todo.text;
        button.classList.add("todo-item__delete");
        button.textContent = "Видалити";

        if (todo.done) {
            li.classList.add("todo-item--checked");
            input.checked = true;
        }

        li.appendChild(input);
        li.appendChild(span);
        li.appendChild(button);

        return li;
    });
}

const todoWrapper = document.querySelector(".js--todos-wrapper");
const form = document.querySelector(".js--form");

const createHTMLTodo = (todo) => {
    const liElementList = getPreparedLiList(todo);
    liElementList.forEach((element) => todoWrapper.appendChild(element));
};

// После загрузки страницы проверяем localStorage на наличие данных которые требуется выгрузить
// если данных нет то берем данные с массива todo
window.addEventListener("DOMContentLoaded", () => {
    const todoFromLocalStorage = localStorage.getItem("todo");
    if (todoFromLocalStorage) {
        createHTMLTodo(JSON.parse(todoFromLocalStorage));
        todo = JSON.parse(todoFromLocalStorage);
        return;
    }
    createHTMLTodo(todo);
});

// Обновление элементов на странице (удалить, добавить) подразумевает сравнение двух массивов
// массив ID элементов полученных из localStorage (или из массива todo) и массива ID элементов на странице.
const updateHTMLTodo = (todo) => {
    const liList = Array.from(todoWrapper.children);

    const todoIds = todo.map((element) => element.id);
    const htmlTodoIds = liList.map((li) => Number(li.dataset.todoId));

    if (todoIds.length > htmlTodoIds.length) {
        const newTodoItem = todo.filter((element) => htmlTodoIds.indexOf(element.id) === -1);
        const liElementList = getPreparedLiList(newTodoItem);
        liElementList.forEach((element) => todoWrapper.appendChild(element));
    }

    if (todoIds.length < htmlTodoIds.length) {
        liList.filter((element) => todoIds.indexOf(Number(element.dataset.todoId)) === -1)
            .forEach((element) => element.remove());
    }
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = event.target.querySelector(".form__label > .form__input");

    if (input !== undefined) {
        const lastElementId = todo.length > 0 ? todo[todo.length - 1].id + 1 : 1;
        todo.push({id: lastElementId, text: input.value, done: false});
        localStorage.setItem("todo", JSON.stringify(todo));
        updateHTMLTodo(todo);
    }
});

todoWrapper.addEventListener("click", (event) => {
    if (event.target.classList.contains("todo-item__delete")) {
        const todoDeleteIndex = todo.findIndex((element) => element.id === Number(event.target.parentElement.dataset.todoId));
        todo.splice(todoDeleteIndex, 1);
        localStorage.setItem("todo", JSON.stringify(todo));
        updateHTMLTodo(todo);
    }

    if (event.target.tagName === "INPUT") {
        const elementStateIndex = todo.findIndex((element) => element.id === Number(event.target.parentElement.dataset.todoId));
        const elementState = todo.find((element) => element.id === Number(event.target.parentElement.dataset.todoId));
        elementState.done = event.target.checked;
        todo.splice(elementStateIndex, 1, elementState);
        localStorage.setItem("todo", JSON.stringify(todo));
        event.target.parentElement.classList.toggle("todo-item--checked");
    }
});