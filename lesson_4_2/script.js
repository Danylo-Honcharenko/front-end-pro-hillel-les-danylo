const numeric = prompt("Вкажіть бажане число");

if (numeric != null && numeric.match("[0-9]+")) {
    const numbers = numeric.split("").map(Number);
    const set = new Set(numbers);
    const repeatingNumbers = numbers.filter((number, index) => numbers.indexOf(number) !== index);
    alert(`Чи правда, що всі цифри однакові? ${set.size === 1} \nЧи є серед цифр цифри однакові? ${repeatingNumbers.length !== 0}`);
}