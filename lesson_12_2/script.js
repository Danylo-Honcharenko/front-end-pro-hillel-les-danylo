const parent = document.querySelector('#parent');

parent.addEventListener('click', (e) => {
    if (e.target.tagName === "BUTTON") {
        alert(`Кікнуто по кнопці ${e.target.textContent}`)
    }
});