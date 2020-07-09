import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AuthorService = class AuthorService {
    constructor() {
        this.AuthorsArray = ["Author1", "Author2", "Author3"];
    }
    getAuthors() {
        return this.AuthorsArray;
    }
};
AuthorService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthorService);
export { AuthorService };
//# sourceMappingURL=author.service.js.map