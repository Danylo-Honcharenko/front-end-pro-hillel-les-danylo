function math() {
    let number = 0;
    return function (secondNumber) {
        return number += secondNumber;
    };
}

const sum = math();

console.log(sum(4));
console.log(sum(6));
console.log(sum(10));
console.log(sum(7));
