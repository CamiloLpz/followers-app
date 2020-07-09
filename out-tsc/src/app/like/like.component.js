import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let LikeComponent = class LikeComponent {
    onClick() {
        this.isActive = !this.isActive;
        this.likesCount += (this.isActive) ? 1 : -1;
    }
};
__decorate([
    Input('likesCount')
], LikeComponent.prototype, "likesCount", void 0);
__decorate([
    Input('isActive')
], LikeComponent.prototype, "isActive", void 0);
LikeComponent = __decorate([
    Component({
        selector: 'like',
        templateUrl: './like.component.html',
        styleUrls: ['./like.component.css']
    })
], LikeComponent);
export { LikeComponent };
//# sourceMappingURL=like.component.js.map