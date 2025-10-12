const user = {
    contacts: [{
        name: "John Doe",
        number: "+3803214567",
        email: "test.test@gmail.com"
    }],
    addContact: function (user) {
        this.contacts.push(user);
    },
    findContact: function (name) {
        return this.contacts.find((contact) => contact.name === name);
    }
};

console.log(user.contacts);

user.addContact({
    name: "Valentin",
    number: "+3803214567",
    email: "test.test@gmail.com"
});

user.addContact({
    name: "Valera",
    number: "+3803214567",
    email: "test.test@gmail.com"
});

user.addContact({
    name: "Dmitro",
    number: "+3803214567",
    email: "test.test@gmail.com"
});

console.log(user.findContact("Valera"));