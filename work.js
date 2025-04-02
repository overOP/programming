//1.Vehicle class
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayDetails() {
        return `Vehicle: ${this.make} ${this.model}, Year: ${this.year}`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year, doors) {
        super(make, model, year);
        this.doors = doors;
    }

    displayDetails() {
        return `Car: ${this.make} ${this.model}, Year: ${this.year}, Doors: ${this.doors}`;
    }
}

// Example usage
const vehicle1 = new Vehicle("BMW", "M4", 2022);
console.log(vehicle1.displayDetails());

const car1 = new Car("Honda", "Civic", 2023, 4);
console.log(car1.displayDetails());















//4.Employee class
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    calculateAnnualSalary() {
        return this.salary * 12;
    }

    getDetails() {
        return `Employee: ${this.name}, Annual Salary: $${this.calculateAnnualSalary()}`;
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
        this.bonus = salary * 0.2;
    }

    calculateAnnualSalary() {
        // Managers get 20% bonus
        return (this.salary + this.bonus) * 12;
    }

    getDetails() {
        return `Manager: ${this.name}, Department: ${this.department}, Annual Salary: $${this.calculateAnnualSalary()}`;
    }
}

// Create manager instances
const manager1 = new Manager("Pradeep", 8000, "Engineering");
const manager2 = new Manager("Over", 8500, "Marketing");

// Display manager details and annual salaries
console.log(manager1.getDetails());
console.log(manager2.getDetails());




//5.Book class
class Book {
    constructor(title, author, publicationYear) {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
    }
   
    displayDetails() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.publicationYear}`);
    }
}

class Ebook extends Book {
    constructor(title, author, publicationYear, price) {
        super(title, author, publicationYear);
        this.price = price;
    }

    displayDetails() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.publicationYear}, Price: $${this.price}`);
    }
}

// Create an instance of Ebook
const myEbook = new Ebook("JavaScript Essentials", "pradeep", 2023, 30.99);

// Display the ebook details
myEbook.displayDetails();