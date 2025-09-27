const number = 10369;
console.log(`До: ${number}`);
const splitNumber = number.toString()
    .split("")
    .join(" ");
console.log(`Після: ${splitNumber}`);