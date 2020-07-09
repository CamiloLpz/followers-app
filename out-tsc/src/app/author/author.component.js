import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AuthorComponent = class AuthorComponent {
    constructor(service) {
        this.title = "Authors";
        this.authors = service.getAuthors();
    }
    ngOnInit() {
    }
};
AuthorComponent = __decorate([
    Component({
        selector: 'app-author',
        templateUrl: './author.component.html',
        styleUrls: ['./author.component.css']
    })
], AuthorComponent);
export { AuthorComponent };
//# sourceMappingURL=author.component.js.map