const button = document.querySelector('#change-color');
const text = document.querySelector('.text');

button.addEventListener('click', () => {
    text.classList.toggle('red');
});