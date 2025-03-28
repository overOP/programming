class id {
    constructor(name,age,city){ 
        //this is used to refer to the current object
        this.name = name;
        this.age = age;
        this.city = city;
    }
    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}, City: ${this.city}`;
    }
}

const my = new id('pradeep',20,'chennai');
console.log(my.getDetails());

class car {
    constructor(name,model,year){
        this.name = name;
        this.model = model;
        this.year = year;
    }
    getDetails(){
        return `Name: ${this.name}, Model: ${this.model}, Year: ${this.year}`;
    }
}

const myCar = new car('Toyota','Corolla',2020);
console.log(myCar.getDetails());

const myCar2 = new car('byd', 's3', 2024);
console.log(myCar2.getDetails());


class person {
    constructor(name,age,country){
        this.name = name;
        this.age = age;
        this.country = country;
    }
    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}, Country: ${this.country}`;
    }
}
const myPerson = new person('over',24,'nepal');
console.log(myPerson.getDetails());

const myPerson2 = new person('pradeep', 25 , 'uk');
console.log(myPerson2.getDetails());


class Rectangle {
    constructor(width,height){
        this.width = width;
        this.height = height;
    }
    getArea(){
        return this.width * this.height;
    }
    getPerimeter(){
        return 2 * (this.width + this.height);
    }
}

const myRectangle = new Rectangle(10,20);
console.log(myRectangle.getArea());

const myRectangle2 = new Rectangle(5,2);
console.log(myRectangle2.getPerimeter());