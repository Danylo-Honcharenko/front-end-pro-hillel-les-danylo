// Матрица
const pythagorasArray = [];

for (let i = 2; i <= 10; i++) {
    const operationResult = [];
    operationResult.unshift(i);
    for (let j = 2; j <= 10; j++) {
        operationResult.push(i * j);
    }
    pythagorasArray.push(operationResult);
}

const tableById = document.querySelector('#table');
const createdTable = document.createElement('table');

tableById.appendChild(createdTable);

pythagorasArray.map((pythagorasNumbers) => {
    const tr = document.createElement('tr');
    pythagorasNumbers.map((pythagorasNumber) => {
        const td = document.createElement('td');
        td.textContent = pythagorasNumber;
        return td;
    }).forEach((td) => tr.appendChild(td));
    return tr;
}).forEach((tr) => createdTable.appendChild(tr));