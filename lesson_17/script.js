class Calculator {

    add(...numbers) {
        return numbers.reduce((accumulate, currentValue) => accumulate + currentValue, 0);
    }

    subtract(firstNumber, secondNumber) {
        return firstNumber - secondNumber;
    }

    multiply(...numbers) {
        return numbers.reduce((accumulate, currentValue) => accumulate * currentValue, 1);
    }

    divide(firstNumber, secondNumber) {
        return firstNumber / secondNumber;
    }
}

const calculator = new Calculator();
console.log(calculator.add(1, 1, 1, 1, 1));
console.log(calculator.subtract(3, 1));
console.log(calculator.multiply(3, 2, 2));
console.log(calculator.divide(4, 2));