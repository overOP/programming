



//3
class UserList {
  constructor() {
      this.users = []
      this.name = ''
      this.age = ''
      this.nameField = document.getElementById('username')
      this.ageField = document.getElementById('age')
      this.submitButton = document.getElementById('submitBtn')
      this.resultBox = document.getElementById('result3')
      this.initalizeEvents()
  }

  initalizeEvents() {
      this.submitButton.addEventListener('click', () => this.getUserInputs())
  }

  getUserInputs() {
      this.name = this.nameField.value
      this.age = this.ageField.value
      this.users.push({ name: this.name, age: this.age })
      this.displayResult()
  }

  displayResult() {
      const ulComp = document.createElement('ul')
      this.users.forEach(item => {
          const liComp = document.createElement('li')
          liComp.innerHTML = `Name: ${item.name}, Age: ${item.age}`
          ulComp.appendChild(liComp)
      })
      this.resultBox.innerHTML = ""
      this.resultBox.appendChild(ulComp)
  }
}

document.addEventListener('DOMContentLoaded', new UserList())