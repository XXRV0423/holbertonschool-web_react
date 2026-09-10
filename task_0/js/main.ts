interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Xander',
    lastName: 'Roldan',
    age: 21,
    location: 'New York'
};

const student2: Student = {
    firstName: 'Yara',
    lastName: 'Smith',
    age: 22,
    location: 'Los Angeles',
};

const studentsList: Student[] = [student1, student2];

function renderTable(students: Student[]): void {
    const table: HTMLTableElement = document.createElement('table');

    students.forEach((student) => {
        const row: HTMLTableRowElement = table.insertRow();
        const firstNameCell: HTMLTableCellElement = row.insertCell(0);
        const locationCell: HTMLTableCellElement = row.insertCell(1);

        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.location;
    });

    document.body.appendChild(table);
}

renderTable(studentsList);
