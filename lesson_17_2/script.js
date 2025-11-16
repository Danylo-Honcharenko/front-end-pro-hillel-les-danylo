class Coach {
    constructor(name, specialization, rating) {
        this.name = name;
        this.specialization = specialization;
        this.rating = rating;
    }

    displayInfo() {
        return `Coach: ${this.name}, Specialization: ${this.specialization}, Rating: ${this.rating}`;
    }
}

const firstCoach = new Coach('John Doe', 'Fitness', 4.7);
console.log(firstCoach.displayInfo());

const secondCoach = new Coach('Alice Smith', 'Yoga', 4.9);
console.log(secondCoach.displayInfo());