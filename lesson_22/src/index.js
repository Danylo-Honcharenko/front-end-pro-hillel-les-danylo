import {PageElement} from "./pageElement";
import "./main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";

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

const pageElement = new PageElement();

$("#closeModal").click(() => {
    $("#exampleModal").hide();
});

$("#closeBtn").click(() => {
    $("#exampleModal").hide();
});

// После загрузки страницы проверяем localStorage на наличие данных которые требуется выгрузить
// если данных нет то берем данные с массива todo
$(window).on("DOMContentLoaded", () => {
    const todoFromLocalStorage = localStorage.getItem("todo");
    if (todoFromLocalStorage) {
        pageElement.createHTMLTodo(JSON.parse(todoFromLocalStorage));
        todo = JSON.parse(todoFromLocalStorage);
        return;
    }
    pageElement.createHTMLTodo(todo);
});

// Обновление элементов на странице (удалить, добавить) подразумевает сравнение двух массивов
// массив ID элементов полученных из localStorage (или из массива todo) и массива ID элементов на странице.
const updateHTMLTodo = (todo) => {
    const liList = $(".js--todos-wrapper").children().get();

    const todoIds = todo.map((element) => element.id);
    const htmlTodoIds = liList.map((li) => Number($(li).data("todoId")));

    if (todoIds.length > htmlTodoIds.length) {
        const newTodoItem = todo.filter((element) => htmlTodoIds.indexOf(element.id) === -1);
        const liElementList = pageElement.getPreparedLiList(newTodoItem);
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