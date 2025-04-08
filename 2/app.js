
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