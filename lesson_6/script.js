const user = {
    name: "John",
    age: 25,
    city: "London",
    getUserInfo: function () {
        return `Name: ${this.name}, Age: ${this.age}, City: ${this.city}`;
    }
};

console.log(user.getUserInfo());
