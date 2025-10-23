function Company(departmentsAndEmployees) {
    this.departmentsAndEmployees = departmentsAndEmployees;
    this.result = 0;

    this.getSalarySum = (object = this.departmentsAndEmployees) => {
        for (let key in object) {
            if (Array.isArray(object[key])) {
                this.result += object[key].reduce((accumulate, currentValue) => accumulate + currentValue.salary, 0);
            }
            if (typeof object === 'object' && !Array.isArray(object) && object !== null) {
                // Рекурсивно переходим к след. объекту
                this.getSalarySum(object[key]);
            }
        }

        return this.result;
    }
}

const departmentsAndEmployees = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
    development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}],
        ba: {
            internals: {
                workers: [{name: 'Marta', salary: 1000}]
            },
            analysts: {
                workers: [{name: 'Alex', salary: 1000}]
            }
        }
    }
};

const company = new Company(departmentsAndEmployees);
console.log(company.getSalarySum());