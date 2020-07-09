import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
let SignupFormComponent = class SignupFormComponent {
    constructor() {
        this.form = new FormGroup({
            'username': new FormControl('', [
                Validators.required,
                Validators.minLength(3),
                UsernameValidators.cannotContainSpace
            ]),
            'password': new FormControl('', Validators.required)
        });
    }
    get username() {
        return this.form.get('username');
    }
};
SignupFormComponent = __decorate([
    Component({
        selector: 'signup-form',
        templateUrl: './signup-form.component.html',
        styleUrls: ['./signup-form.component.css']
    })
], SignupFormComponent);
export { SignupFormComponent };
//# sourceMappingURL=signup-form.component.js.map