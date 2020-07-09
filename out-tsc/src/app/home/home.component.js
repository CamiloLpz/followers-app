import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class HomeComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, "home works!");
        i0.ɵɵelementEnd();
    } }, styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HomeComponent, [{
        type: Component,
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=home.component.js.map