function multiply(a) {
    return function(b) {
        return a * b;
    }
}

function add(a) {
    return function(b) {
        return a + b;
    }
}

console.log(multiply(3)(2));
console.log(add(2)(1));