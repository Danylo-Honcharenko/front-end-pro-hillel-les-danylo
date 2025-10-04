const number = prompt("Ваше ціле число");

for (let i = 1; i <= 100; i++) {
    if (Math.pow(i, 2) > Number(number)) continue;
    console.log(i);
}