const pythagorasTable = {
    "result": [],
    "numeration": []
};

for (let i = 2; i <= 10; i++) {
    const numbers = [];
    numbers.unshift(i);
    for (let j = 2; j <= 10; j++) {
        numbers.push(i * j);
    }
    pythagorasTable.numeration.push(i);
    pythagorasTable.result.push(numbers);
}

pythagorasTable.result.unshift(['', ...pythagorasTable.numeration]);

const tableById = document.querySelector('#table');
const createdTable = document.createElement('table');

tableById.appendChild(createdTable);

pythagorasTable.result.map((pythagorasNumbers) => {
    const tr = document.createElement('tr');
    pythagorasNumbers.map((pythagorasNumber) => {
        const td = document.createElement('td');
        td.textContent = pythagorasNumber;
        return td;
    }).forEach((td) => tr.appendChild(td));
    return tr;
}).forEach((tr) => createdTable.appendChild(tr));