class UserForm {
    constructor(formId) {
      this.form = document.getElementById(formId);
      this.form.addEventListener('submit', this.handleSubmit.bind(this));
    }

    handleSubmit(event) {
      event.preventDefault();
      const name = this.form.querySelector('#name').value;
      const email = this.form.querySelector('#email').value;
      this.showAlert(name, email);
    }

    showAlert(name, email) {
      alert(`Name: ${name}\nEmail: ${email}`);
    }
  }

  // Initialize the form handler
  new UserForm('userForm');


//2
class ProductList {
  constructor(formId) {
    this.form = document.getElementById(formId);
    this.products = [];

    this.form.addEventListener('submit', this.handleSubmit.bind(this));
  }

  handleSubmit(event) {
    event.preventDefault(); //it is used to prevent the default form submission behavior
    const name = this.form.querySelector('#productName').value;
    const price = parseFloat(this.form.querySelector('#productPrice').value);

    const product = { name, price };
    this.products.push(product);

    this.showProducts();
    this.form.reset(); // Clear form after submission
  }

  showProducts() {
    let message = 'Product List:\n';
    this.products.forEach((product, index) => {
      message += `${index + 1}. ${product.name} - $${product.price}\n`;
    });
    alert(message);
  }
}

// Initialize ProductList with the form
new ProductList('productForm');



//3
 // Class to handle form input and display
    class UserList {
      constructor(formId, listId) {
        this.form = document.getElementById(formId);
        this.listElement = document.getElementById(listId);
        this.users = [];

        // Bind form submit event
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
      }

      handleSubmit(event) {
        event.preventDefault();// it is used to prevent the default form submission behavior

        const name = this.form.querySelector('#userName').value.trim();
        const age = parseInt(this.form.querySelector('#userAge').value);

        if (!name || isNaN(age)) return;

        // Add user to the list
        this.users.push({ name, age });

        // Update the list display
        this.renderList();

        // Clear the form fields
        this.form.reset();
      }

      renderList() {
        this.listElement.innerHTML = ''; // Clear old list
        this.users.forEach((user, index) => {
          const li = document.createElement('li');
          li.textContent = `${user.name}, Age: ${user.age}`;
          this.listElement.appendChild(li);
        });
      }
      
    }

    // Initialize class with form and list IDs
    new UserList('userForm', 'userList');//it is used to create a new instance of the UserList class