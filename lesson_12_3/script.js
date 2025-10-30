const box = document.querySelector('#box');
const list = document.querySelector('#box > div > ul');

const todo = [
    {name: "Завдання 1"},
    {name: "Завдання 2"},
    {name: "Завдання 3"}
];

todo.forEach((task) => {
    const buttonDelete = document.createElement("button");
    const li = document.createElement('li');
    li.textContent = task.name;
    buttonDelete.textContent = "Видалити";
    buttonDelete.className = "btnDelete";
    li.appendChild(buttonDelete);
    task.element = li;
    list.appendChild(li);
});


box.addEventListener('click', (event) => {
    if (event.target.classList.contains('btnDelete')) {
        const index = todo.findIndex((task) => task.name === event.target.parentNode.childNodes[0].textContent);
        console.log(index);
        todo.splice(index, 1);
        list.childNodes[index].remove();
    }

    if (event.target.classList.contains('btnAdd')) {
        const input = event.target.parentNode.querySelector('input');
        const taskName = input.value.trim();
        const buttonDelete = document.createElement("button");
        const li = document.createElement('li');
        li.textContent = taskName;
        buttonDelete.textContent = "Видалити";
        buttonDelete.className = "btnDelete";
        li.appendChild(buttonDelete);
        list.appendChild(li);
        todo.push({name: taskName, element: li});
    }
});