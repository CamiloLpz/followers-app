import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CourseFormComponent = class CourseFormComponent {
    constructor() {
        this.categories = [
            { id: 1, name: 'Development' },
            { id: 2, name: 'Arts' },
            { id: 3, name: 'Life' },
        ];
    }
    submit(course) {
        console.log(course);
    }
};
CourseFormComponent = __decorate([
    Component({
        selector: 'course-form',
        templateUrl: './course-form.component.html',
        styleUrls: ['./course-form.component.css']
    })
], CourseFormComponent);
export { CourseFormComponent };
//# sourceMappingURL=course-form.component.js.map