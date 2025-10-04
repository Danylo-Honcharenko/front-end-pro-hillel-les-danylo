const number = Number(prompt("Ціле число"));

let isComposite = false;
if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isComposite = true;
            break;
        }
    }
} else {
    console.log("Число має бути більше 1!");
}

console.log(isComposite ? "Складене!" : "Просте!");