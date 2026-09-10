interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

const teacher1: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: true,
    yearsOfExperience: 5,
    location: 'New York',
};

const teacher2: Teacher = {
    firstName: 'Jane',
    lastName: 'Smith',
    fullTimeEmployee: false,
    location: 'Los Angeles',
};

const teacher3: Teacher = {
    firstName: 'Emily',
    lastName: 'Johnson',
    fullTimeEmployee: false,
    location: 'Chicago',
    contract: false,
};

console.log(teacher1);
console.log(teacher2);
console.log(teacher3);

const director1: Directors = {
    firstName: 'Michael',
    lastName: 'Brown',
    location: 'San Francisco',
    fullTimeEmployee: true,
    numberOfReports: 10,
};

console.log(director1);

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName[0]}. ${lastName}`;
}

console.log(printTeacher('John', 'Doe'));
interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}
interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass implements StudentClassInterface {
    firstName: string;

    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

const student = new StudentClass('John', 'Doe');
console.log(student.workOnHomework());
console.log(student.displayName());
