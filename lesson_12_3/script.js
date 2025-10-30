const list = document.querySelector('#box > div > ul');
const btnAdd = document.querySelector('.btnAdd');

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

list.addEventListener('click', (event) => {
    if (event.target.tagName === "BUTTON") {
        const index = todo.findIndex((task) => task.name === event.target.parentNode.childNodes[0].textContent);
        console.log(index);
        todo.splice(index, 1);
        list.childNodes[index].remove();
    }
});

btnAdd.addEventListener('click', (event) => {
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
});