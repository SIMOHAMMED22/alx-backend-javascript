// main.ts

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Mohammed",
    lastName: "El fayqh",
    age: 23,
    location: "fes"
};

const student2: Student = {
    firstName: "Alice",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tableBody = document.createElement('tbody');

studentsList.forEach(student => {
    const row = tableBody.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
});

table.appendChild(tableBody);
document.body.appendChild(table);
