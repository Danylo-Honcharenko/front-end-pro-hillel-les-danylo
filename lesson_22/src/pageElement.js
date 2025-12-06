export class PageElement {

    getPreparedLiList = (todo) => {
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

    createHTMLTodo = (todo) => {
        const liElementList = this.getPreparedLiList(todo);
        liElementList.forEach((element) => $(".js--todos-wrapper").append(element));
    }
}