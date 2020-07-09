import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
let FavoriteComponent = class FavoriteComponent {
    constructor() {
        this.change = new EventEmitter();
    }
    onClick() {
        this.isFavorite = !this.isFavorite;
        this.change.emit({ newValue: this.isFavorite });
    }
};
__decorate([
    Input('is-favorite')
], FavoriteComponent.prototype, "isFavorite", void 0);
__decorate([
    Output('change')
], FavoriteComponent.prototype, "change", void 0);
FavoriteComponent = __decorate([
    Component({
        selector: 'favorite',
        templateUrl: './favorite.component.html',
        styleUrls: ['./favorite.component.css'],
        encapsulation: ViewEncapsulation.Emulated
    })
], FavoriteComponent);
export { FavoriteComponent };
//# sourceMappingURL=favorite.component.js.map