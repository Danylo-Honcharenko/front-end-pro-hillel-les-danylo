function numberLoop() {
    let number;
    let i = 1;
    while (i <= 10) {
        number = prompt("Введіть число більше 100");
        if (number > 100) break;
        i++;
    }
    console.log(number);
}

numberLoop();