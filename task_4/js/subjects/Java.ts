/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number;
    }

    export class Java extends Subject {
        getRequierements(): string {
            return 'Here is the list of requierements for Java';
        }

        getAvailableTeacher(): string {
            if (this.teacher && this.teacher.experienceTeachingJava) {
                return `Available Teacher: ${this.teacher.firstName}`;
            }
            return 'No available teacher';
        }
    }
}
