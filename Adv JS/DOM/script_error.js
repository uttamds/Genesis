let students = ["Alice", "Bob", "Charlie"];

document.addEventListener("DOMContentLoaded", function () {
    displayStudents();

    document.getElementById("addStudentBtn").addEventListener("click", function () {
        let studentInput = document.getElementById("studentName");
        let newStudent = studentInput.value.trim();
        let errorMessage = document.getElementById("errorMessage");
        
        if (newStudent) {
            students.push(newStudent);
            studentInput.value = "";
            if (errorMessage) errorMessage.textContent = ""; // Clear error if input is valid
            displayStudents();
        } else {
            if (!errorMessage) {
                errorMessage = document.createElement("p");
                errorMessage.id = "errorMessage";
                errorMessage.style.color = "red";
                document.body.insertBefore(errorMessage, studentInput.nextSibling);
            }
            errorMessage.textContent = "Please enter a student name before adding.";
        }
    });
});

function displayStudents() {
    let studentList = document.getElementById("studentList");
    studentList.innerHTML = "";
    students.forEach(student => {
        let li = document.createElement("li");
        li.textContent = student;
        studentList.appendChild(li);
    });
}
