function Student(firstName, lastName, yearOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.marks = [100, 80, 90, 130];
    this.attendence = [];

    this.getAge = () => {
        return new Date().getFullYear() - Number(this.yearOfBirth);
    }

    this.averageScore = () => {
        return this.marks.reduce((accumulate, current) => accumulate + current, 0) / this.marks.length;
    }

    this.setPresent = () => {
        if (this.attendence.length <= 25) {
            this.attendence.push(true);
            return;
        }
        console.log("Не можна додати більше 25 позначок!");
    }

    this.setAbsent = () => {
        if (this.attendence.length <= 25) {
            this.attendence.push(false);
            return;
        }
        console.log("Не можна додати більше 25 позначок!");
    }

    this.summary = () => {
        const averageScore = this.averageScore();
        const averageAttendance = this.attendence.length !== 0 ?
            this.attendence.filter((value) => value === true).length / this.attendence.length : 0;
        if (averageScore >= 90 && averageAttendance >= 0.9) return "Молодець!";
        else if ((averageScore <= 90 && averageAttendance >= 0.9) || (averageScore >= 90 && averageAttendance <= 0.9)) return "Добре, але можна краще";
        else return "Редиска!";
    }
}

const student1 = new Student('Jan', 'January', 2005);

student1.setPresent();
student1.setPresent();
student1.setAbsent();

console.log(student1.summary());
console.log(student1.getAge())

const student2 = new Student('Jan', 'Djunpo', 2003);

student2.setPresent();
student2.setPresent();
student2.setPresent();
student2.setPresent();
student2.setPresent();
student2.setPresent();
student2.setPresent();
student2.setPresent();
student2.setPresent();
student2.setPresent();
student2.setPresent();
student2.setPresent();
student2.setPresent();
student2.setPresent();
student2.setPresent();
student2.setPresent();
student2.setAbsent();

console.log(student2.summary());
console.log(student2.getAge())
