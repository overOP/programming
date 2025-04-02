class StudentManager {
    constructor() {
        this.students = [];
        this.characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        
        this.submitButton = document.getElementById('submitBtn');
        this.rollNumberInput = document.getElementById('rollNo');
        this.fullNameInput = document.getElementById('fullname');
        this.searchInput = document.getElementById('search');
        this.tableBody = document.getElementById("table-body");

        this.submitButton.addEventListener("click", () => this.addStudent());
        this.searchInput.addEventListener("input", () => this.searchData());
    }

    generateString(length) {
        let result = '';
        const charactersLength = this.characters.length;
        for (let i = 0; i < length; i++) {
            result += this.characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    displayStudentDetails(data) {
        this.tableBody.innerHTML = '';
        data.forEach(student => {
            const tableRow = document.createElement("tr");
            tableRow.innerHTML = `
                <td>${student.rollNumber}</td>
                <td>${student.studentName}</td>
                <td>${student.classNumber}</td>
                <td>${student.subject}</td>
                <td>${student.remarks}</td>
                <td><button class="delete-btn" onclick="studentManager.deleteStudent('${student.id}')">Delete</button></td>
                <td><button class="edit-btn" onclick="studentManager.editStudent('${student.id}')">Edit</button></td>
                <td><button class="view-btn" onclick="studentManager.viewStudent('${student.id}')">View</button></td>
            `;
            this.tableBody.appendChild(tableRow);
        });
    }

    addStudent() {
        const rollNo = this.rollNumberInput.value.trim();
        const fullname = this.fullNameInput.value.trim();
        
        if (!rollNo || !fullname) {
            alert("Please fill in all fields.");
            return;
        }
        
        if (this.students.some(student => student.rollNumber === rollNo)) {
            alert("Roll number already exists, please assign another roll number");
            return;
        }
        
        const studentObj = {
            id: this.generateString(8),
            rollNumber: rollNo,
            studentName: fullname,
            classNumber: "9",
            subject: "Maths",
            remarks: "Pass",
        };
        
        this.students.push(studentObj);
        this.displayStudentDetails(this.students);
        
        this.rollNumberInput.value = '';
        this.fullNameInput.value = '';
    }

    deleteStudent(studentId) {
        this.students = this.students.filter(student => student.id !== studentId);
        this.displayStudentDetails(this.students);
    }

    editStudent(studentId) {
        const index = this.students.findIndex(student => student.id === studentId);
        if (index !== -1) {
            const newRollNo = prompt("Enter new roll number:");
            const newName = prompt("Enter new name:");
            
            if (!newRollNo || !newName) {
                alert("Please provide both roll number and name");
                return;
            }
            
            if (this.students.some(x => student.rollNumber === newRollNo && student.id !== studentId)) {
                alert("Roll number already exists");
                return;
            }
            
            this.students[index].rollNumber = newRollNo;
            this.students[index].studentName = newName;
            this.displayStudentDetails(this.students);
        }
    }

    viewStudent(studentId) {
        const student = this.students.find(student => student.id === studentId);
        if (student) {
            alert(`Roll Number: ${student.rollNumber}\nName: ${student.studentName}\nClass: ${student.classNumber}\nSubject: ${student.subject}\nRemarks: ${student.remarks}`);
        }
    }

    searchData() {
        const searchValue = this.searchInput.value.toLowerCase().trim();
        const filteredData = searchValue ? this.students.filter(student => student.studentName.toLowerCase().includes(searchValue)) : this.students;
        this.displayStudentDetails(filteredData);
    }
}

const studentManager = new StudentManager();
