interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
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