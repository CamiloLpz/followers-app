import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class NotFoundComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 2, vars: 0, template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, "not-found works!");
        i0.ɵɵelementEnd();
    } }, styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NotFoundComponent, [{
        type: Component,
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.css']
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=not-found.component.js.map