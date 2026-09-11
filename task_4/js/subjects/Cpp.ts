/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

namespace Subjects {
    export interface Teacher {
        experienceTeachingC?: number;
    }

    export class Cpp extends Subject {
        getRequierements(): string {
            return 'Here is the list of requierements for Cpp';
        }

        getAvailableTeacher(): string {
            if (this.teacher && this.teacher.experienceTeachingC) {
                return `Available Teacher: ${this.teacher.firstName}`;
            }
            return 'No available teacher';
        }
    }
}
