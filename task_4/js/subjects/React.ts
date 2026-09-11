/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number;
    }

    export class React extends Subject {
        getRequierements(): string {
            return 'Here is the list of requierements for React';
        }

        getAvailableTeacher(): string {
            if (this.teacher && this.teacher.experienceTeachingReact) {
                return `Available Teacher: ${this.teacher.firstName}`;
            }
            return 'No available teacher';
        }
    }
}
