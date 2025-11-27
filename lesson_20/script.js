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

        $(li).addClass("todo-item");
        $(li).addClass("bg-light");
        li.dataset.todoId = todo.id;

        $(li).hover(() => $(li).addClass("bg-body-secondary"), () => $(li).removeClass("bg-body-secondary"));

        $(li).click((event) => {
            if ($(event.target).hasClass("todo-item__description")) {
                const text = $(event.target).text();
                $("#exampleModal").show();
                $("#modalText").text(text);
            }
        });

        input.type = "checkbox";
        input.name = "text";
        $(input).text("!");
        $(input).addClass("form-check-input");

        $(span).addClass("todo-item__description");
        $(span).text(todo.text);

        $(button).addClass("todo-item__delete");
        $(button).addClass("btn");
        $(button).addClass("btn-danger");
        $(button).text("Видалити");

        if (todo.done) {
            $(li).addClass("bg-success-subtle");
            input.checked = true;
        }

        li.appendChild(input);
        li.appendChild(span);
        li.appendChild(button);

        return li;
    });
}

$("#closeModal").click(() => {
    $("#exampleModal").hide();
});

$("#closeBtn").click(() => {
    $("#exampleModal").hide();
});

const createHTMLTodo = (todo) => {
    const liElementList = getPreparedLiList(todo);
    liElementList.forEach((element) => $(".js--todos-wrapper").append(element));
};

// После загрузки страницы проверяем localStorage на наличие данных которые требуется выгрузить
// если данных нет то берем данные с массива todo
$(window).on("DOMContentLoaded", () => {
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
    const liList = Array.from($(".js--todos-wrapper").children());

    const todoIds = todo.map((element) => element.id);
    const htmlTodoIds = liList.map((li) => Number(li.dataset.todoId));

    if (todoIds.length > htmlTodoIds.length) {
        const newTodoItem = todo.filter((element) => htmlTodoIds.indexOf(element.id) === -1);
        const liElementList = getPreparedLiList(newTodoItem);
        liElementList.forEach((element) => $(".js--todos-wrapper").append(element));
    }

    if (todoIds.length < htmlTodoIds.length) {
        liList.filter((element) => todoIds.indexOf(Number(element.dataset.todoId)) === -1)
            .forEach((element) => element.remove());
    }
};

$(".js--form").submit((event) => {
    event.preventDefault();

    const input = event.target.querySelector(".form__label > .form__input");

    if (input !== undefined) {
        const lastElementId = todo.length > 0 ? todo[todo.length - 1].id + 1 : 1;
        todo.push({id: lastElementId, text: input.value, done: false});
        localStorage.setItem("todo", JSON.stringify(todo));
        updateHTMLTodo(todo);
    }
});


$(".js--todos-wrapper").click((event) => {
    if ($(event.target).hasClass("todo-item__delete")) {
        console.log("dele")
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
        $(event.target.parentElement).toggleClass("bg-success-subtle");
    }
});