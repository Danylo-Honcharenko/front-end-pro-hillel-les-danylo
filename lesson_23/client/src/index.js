import {PageElement} from "./pageElement";
import {TodoAPI} from "./TodoAPI";
import "./main.css";
import $ from "jquery";

const pageElement = new PageElement();
const todoApi = new TodoAPI();

$("#closeModal").click(() => {
    $("#exampleModal").hide();
});

$("#closeBtn").click(() => {
    $("#exampleModal").hide();
});

$(window).ready(async () => {
    const todos = await todoApi.getAllTodos();
    pageElement.createHTMLTodo(todos);
});

$(".js--form").submit(async (event) => {
    event.preventDefault();

    const input = $(event.target).find(".form__label > .form__input");
    if (input !== undefined) {
        await todoApi.createTodo({text: $(input).val()});

        const todos = await todoApi.getAllTodos();
        pageElement.updateHTMLTodo(todos);
    }
});

$(".js--todos-wrapper").click(async (event) => {
    if ($(event.target).hasClass("todo-item__delete")) {
        const todoId = $(event.target).parent().data("todoId");
        await todoApi.deleteTodo(todoId);

        const todos = await todoApi.getAllTodos();
        pageElement.updateHTMLTodo(todos);
    }

    if (event.target.tagName === "INPUT") {
        const todoId = $(event.target).parent().data("todoId");
        await todoApi.updateTodo({id: todoId, done: event.target.checked});
        $(event.target.parentElement).toggleClass("bg-success-subtle");
    }
});