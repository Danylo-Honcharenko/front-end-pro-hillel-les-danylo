const array = [2, {}, "hello", null, 10, 12, ["world"]];

const result = arithmeticMeanOfNumberInArray(array);
console.log(result);

function arithmeticMeanOfNumberInArray(array) {
    const numbers = [];
    for (let element of array) {
        if (typeof element === "number") numbers.push(element);
    }

    let result = 0;
    const numberAmount = numbers.length;
    for (let number of numbers) {
        result += number;
    }
    return result / numberAmount;
}