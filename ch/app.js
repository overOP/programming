class student {
    constructor(){
        this.name = ''
        this.age = ''
        this.search = ''
        this.name = document.getElementById('name')
        this.age = document.getElementById('age')
        this.city = document.getElementById('city')
        this.btn = document.getElementById('submit')
        this.data()
    }
    data(){
        this.btn.addEventListener(`click`,() => {
            console.log(this.name.value)
            console.log(this.age.value)
            console.log(this.city.value)
        })
    }
    inp(){
        this.name = this.number.value
        this.age = this.number.value
        this.city = this.number.value
    }
}
document.addEventListener('DOMContentLoaded', new student);