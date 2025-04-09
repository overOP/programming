class UserList {
    constructor() {
        this.users = []
        this.name = ''
        this.gmail = ''
        this.nameField = document.getElementById('name')
        this.gmailField = document.getElementById('email')  // fixed
        this.submitButton = document.getElementById('submitBtn')
        this.resultBox = document.getElementById('result')
        this.initializeEvents()
    }

    initializeEvents() {
        this.submitButton.addEventListener('click', () => this.getUserInputs())
    }

    getUserInputs() {
        this.name = this.nameField.value
        this.gmail = this.gmailField.value
        this.users.push({ name: this.name, gmail: this.gmail })
        this.displayResult()
    }

    displayResult() {
        const ulComp = document.createElement('ul')
        this.users.forEach(item => {
            const liComp = document.createElement('li')
            liComp.innerHTML = `Name: ${item.name}, Gmail: ${item.gmail}`
            ulComp.appendChild(liComp)
        })
        this.resultBox.innerHTML = ""
        this.resultBox.appendChild(ulComp)
    }
}

document.addEventListener('DOMContentLoaded', () => new UserList()) // fixed
