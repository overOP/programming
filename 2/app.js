class ProductList {
  constructor() {
    this.users = [];
    this.name = '';
    this.number = '';
    this.nameField = document.getElementById('name');
    this.numberField = document.getElementById('number');
    this.submitButton = document.getElementById('submitBtn');
    this.resultBox = document.getElementById('result');
    
    this.initializeEvents();
  }

  initializeEvents() {
    this.submitButton.addEventListener('click', () => this.getUserInputs());
  }

  getUserInputs() {
    this.name = this.nameField.value;
    this.number = this.numberField.value;
    this.users.push({ name: this.name, number: this.number });
    this.displayResult();
  }

  displayResult() {
    const ulComp = document.createElement('ul');
    this.users.forEach(item => {
      const liComp = document.createElement('li');
      liComp.innerHTML = `Name: ${item.name}, Number: ${item.number}`;
      ulComp.appendChild(liComp);
    });

    this.resultBox.innerHTML = '';
    this.resultBox.appendChild(ulComp);
  }
}
document.addEventListener('DOMContentLoaded', () => new ProductList());
