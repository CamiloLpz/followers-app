import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CoursesComponent = class CoursesComponent {
    constructor() {
        this.text = `
 prueba de un texto largo, que realmente no signifca nada, es para tener una variables con muchos caracteres
 `;
    }
};
CoursesComponent = __decorate([
    Component({
        selector: 'courses',
        template: `
        {{text | summary : 10}}
    `
    })
], CoursesComponent);
export { CoursesComponent };
//# sourceMappingURL=courses.component.js.map