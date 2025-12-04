"use strict";

var todo = [{
  id: 1,
  text: "Text 1",
  done: false
}, {
  id: 2,
  text: "Text 2",
  done: true
}];
var getPreparedLiList = function getPreparedLiList(todo) {
  return todo.map(function (todo) {
    var li = $('<li></li>');
    var input = $("<input>");
    var span = $("<span></span>");
    var button = $("<button></button>");
    li.addClass("todo-item");
    li.addClass("bg-light");
    li.attr("data-todo-id", todo.id);
    li.hover(function () {
      return li.addClass("bg-body-secondary");
    }, function () {
      return li.removeClass("bg-body-secondary");
    });
    li.click(function (event) {
      if ($(event.target).hasClass("todo-item__description")) {
        var text = $(event.target).text();
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
};
$("#closeModal").click(function () {
  $("#exampleModal").hide();
});
$("#closeBtn").click(function () {
  $("#exampleModal").hide();
});
var createHTMLTodo = function createHTMLTodo(todo) {
  var liElementList = getPreparedLiList(todo);
  liElementList.forEach(function (element) {
    return $(".js--todos-wrapper").append(element);
  });
};

// После загрузки страницы проверяем localStorage на наличие данных которые требуется выгрузить
// если данных нет то берем данные с массива todo
$(window).on("DOMContentLoaded", function () {
  var todoFromLocalStorage = localStorage.getItem("todo");
  if (todoFromLocalStorage) {
    createHTMLTodo(JSON.parse(todoFromLocalStorage));
    todo = JSON.parse(todoFromLocalStorage);
    return;
  }
  createHTMLTodo(todo);
});

// Обновление элементов на странице (удалить, добавить) подразумевает сравнение двух массивов
// массив ID элементов полученных из localStorage (или из массива todo) и массива ID элементов на странице.
var updateHTMLTodo = function updateHTMLTodo(todo) {
  var liList = $(".js--todos-wrapper").children().get();
  var todoIds = todo.map(function (element) {
    return element.id;
  });
  var htmlTodoIds = liList.map(function (li) {
    return Number($(li).data("todoId"));
  });
  if (todoIds.length > htmlTodoIds.length) {
    var newTodoItem = todo.filter(function (element) {
      return htmlTodoIds.indexOf(element.id) === -1;
    });
    var liElementList = getPreparedLiList(newTodoItem);
    liElementList.forEach(function (element) {
      return $(".js--todos-wrapper").append(element);
    });
  }
  if (todoIds.length < htmlTodoIds.length) {
    liList.filter(function (element) {
      return todoIds.indexOf(Number($(element).data("todoId"))) === -1;
    }).forEach(function (element) {
      return element.remove();
    });
  }
};
$(".js--form").submit(function (event) {
  event.preventDefault();
  var input = $(event.target).find(".form__label > .form__input");
  if (input !== undefined) {
    var lastElementId = todo.length > 0 ? todo[todo.length - 1].id + 1 : 1;
    todo.push({
      id: lastElementId,
      text: input.val(),
      done: false
    });
    localStorage.setItem("todo", JSON.stringify(todo));
    updateHTMLTodo(todo);
  }
});
$(".js--todos-wrapper").click(function (event) {
  if ($(event.target).hasClass("todo-item__delete")) {
    var todoDeleteIndex = todo.findIndex(function (element) {
      return element.id === Number($(event.target).parent().data("todoId"));
    });
    todo.splice(todoDeleteIndex, 1);
    localStorage.setItem("todo", JSON.stringify(todo));
    updateHTMLTodo(todo);
  }
  if (event.target.tagName === "INPUT") {
    var elementStateIndex = todo.findIndex(function (element) {
      return element.id === Number($(event.target).parent().data("todoId"));
    });
    var elementState = todo.find(function (element) {
      return element.id === Number($(event.target).parent().data("todoId"));
    });
    elementState.done = event.target.checked;
    todo.splice(elementStateIndex, 1, elementState);
    localStorage.setItem("todo", JSON.stringify(todo));
    $(event.target.parentElement).toggleClass("bg-success-subtle");
  }
});