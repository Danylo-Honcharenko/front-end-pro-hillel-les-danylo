class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }

    getBalance() {
        return this.balance;
    }

    deposit(number) {
        this.balance += number;
    }

    withdraw(number) {
        this.balance -= number;
    }
}

const bankAccount = new BankAccount(1000);
console.log(bankAccount.getBalance());
bankAccount.deposit(500);
console.log(bankAccount.getBalance());
bankAccount.withdraw(200);
console.log(bankAccount.getBalance());