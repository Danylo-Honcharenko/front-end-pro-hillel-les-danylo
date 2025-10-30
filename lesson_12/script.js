const setUrlButton = document.querySelector("#setUrl");
const goButton = document.querySelector("#go");
let userUrl;

setUrlButton.addEventListener('click', () => {
    userUrl = prompt("Ваш URL");
});

goButton.addEventListener('click', () => {
    if (userUrl !== undefined && userUrl.trim().length > 0) {
        window.location.href = userUrl;
        return;
    }
    alert("Спочатку встановіть URL!");
});