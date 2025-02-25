let students = ["Alice", "Bob", "Charlie"];

document.addEventListener("DOMContentLoaded", function () {
    displayStudents();

    document.getElementById("addStudentBtn").addEventListener("click", function () {
        let newStudent = document.getElementById("studentName").value;
        if (newStudent) {
            students.push(newStudent);
            document.getElementById("studentName").value = "";
            displayStudents();
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
