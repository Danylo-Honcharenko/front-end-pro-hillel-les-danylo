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
        const li = $('<li></li>');
        const input = $("<input>");
        const span = $("<span></span>");
        const button = $("<button></button>");

        li.addClass("todo-item");
        li.addClass("bg-light");
        li.attr("data-todo-id", todo.id);

        li.hover(() => li.addClass("bg-body-secondary"), () => li.removeClass("bg-body-secondary"));

        li.click((event) => {
            if ($(event.target).hasClass("todo-item__description")) {
                const text = $(event.target).text();
                $("#exampleModal").show();
                $("#modalText").text(text);
            }
        });

        input.attr("type", "checkbox");
        input.attr("name", "text");
        input.text("!");
        input.addClass("form-check-input");

        span.addClass("todo-item__description");
        span.text(todo.text);

        button.addClass("todo-item__delete");
        button.addClass("btn");
        button.addClass("btn-danger");
        button.text("Видалити");

        if (todo.done) {
            li.addClass("bg-success-subtle");
            input.attr("checked", true);
        }

        li.append(input);
        li.append(span);
        li.append(button);

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
    const liList = $(".js--todos-wrapper").children().get();

    const todoIds = todo.map((element) => element.id);
    const htmlTodoIds = liList.map((li) => Number($(li).data("todoId")));

    if (todoIds.length > htmlTodoIds.length) {
        const newTodoItem = todo.filter((element) => htmlTodoIds.indexOf(element.id) === -1);
        const liElementList = getPreparedLiList(newTodoItem);
        liElementList.forEach((element) => $(".js--todos-wrapper").append(element));
    }

    if (todoIds.length < htmlTodoIds.length) {
        liList.filter((element) => todoIds.indexOf(Number($(element).data("todoId"))) === -1)
            .forEach((element) => element.remove());
    }
};

$(".js--form").submit((event) => {
    event.preventDefault();

    const input = $(event.target).find(".form__label > .form__input");
    if (input !== undefined) {
        const lastElementId = todo.length > 0 ? todo[todo.length - 1].id + 1 : 1;
        todo.push({id: lastElementId, text: input.val(), done: false});
        localStorage.setItem("todo", JSON.stringify(todo));
        updateHTMLTodo(todo);
    }
});

$(".js--todos-wrapper").click((event) => {
    if ($(event.target).hasClass("todo-item__delete")) {
        const todoDeleteIndex = todo.findIndex((element) => element.id === Number($(event.target).parent().data("todoId")));
        todo.splice(todoDeleteIndex, 1);
        localStorage.setItem("todo", JSON.stringify(todo));
        updateHTMLTodo(todo);
    }

    if (event.target.tagName === "INPUT") {
        const elementStateIndex = todo.findIndex((element) => element.id === Number($(event.target).parent().data("todoId")));
        const elementState = todo.find((element) => element.id === Number($(event.target).parent().data("todoId")));

        elementState.done = event.target.checked;
        todo.splice(elementStateIndex, 1, elementState);
        localStorage.setItem("todo", JSON.stringify(todo));
        $(event.target.parentElement).toggleClass("bg-success-subtle");
    }
});