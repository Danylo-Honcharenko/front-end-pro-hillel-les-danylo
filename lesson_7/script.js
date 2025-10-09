const line = prompt("Вкажіть ваш рядок");

const letters = [];

while (true) {
    const letter = prompt("Вкажіть букву яку необхідно прибрати з рядка");

    if(!letter) break;

    letters.push(letter);
}

const result = deleteLetters(line, letters);

console.log(result);

function deleteLetters(line, letters) {
    for (let letter of letters) {
        line = line.replaceAll(letter, "");
    }
    return line;
}