let i = 20;
let result = "";

while (i <= 30) {
    result += i === 30 ? i : i + " ";
    i += 0.5;
}

console.log(result);