class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    displayDetails(){
        return `Name: ${this.name}, Price: ${this.price}`
    }
    taxPrice(tax){
        return this.price + (this.price * tax);
    }
}
class book extends Product{
    constructor(name, price, author){
        super(name, price);
        this.author = author;
    }
    displayDetails(){
        return `Name: ${this.name}, Price: ${this.price}, Author: ${this.author}`
    }
}

tax = 12;
// const product = new Product('backpack', 200);
// console.log(product.displayDetails());
// console.log(`Taxed Price: ${product.taxPrice(tax)}`);

const book1 = new book('book1', 100, 'social');
console.log(book1.displayDetails());
console.log(`Taxed Price: ${book1.taxPrice(tax)}`);
