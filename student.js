
//encapsulation
class person {
    constructor(name, DOB) {
        this.name = name;
        this.DOB = DOB;
        this.today = new Date();
        this.birthDate = new Date(this.DOB);
        this.age = this.today.getFullYear() - this.birthDate.getFullYear();
    }
    calculateAge() {
        return this.age;
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}
//inheritance
//we can inherit the properties and methods of the parent class to the child class
class Student extends person {
    constructor(name, DOB, rollno) {
        super(name, DOB);
        this.rollno = rollno;
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Rollno: ${this.rollno}`;  
    }
}

const student1 = new Student('pradeep', '2002-12-19', 1);
console.log(student1.getDetails());