import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const _c0 = function () { return { page: 1, order: "newest" }; };
export class NavbarComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NavbarComponent, selectors: [["navbar"]], decls: 8, vars: 2, consts: [[1, "navbar", "navbar-expand-sm", "bg-light"], [1, "navbar-nav"], ["routerLinkActive", "active- current", 1, "nav-item"], ["routerLink", "/followers", 1, "nav-link", 3, "queryParams"], ["routerLinkActive", "active  current", 1, "nav-item"], ["routerLink", "/posts", 1, "nav-link"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nav", 0);
        i0.ɵɵelementStart(1, "ul", 1);
        i0.ɵɵelementStart(2, "li", 2);
        i0.ɵɵelementStart(3, "a", 3);
        i0.ɵɵtext(4, "Followers");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "li", 4);
        i0.ɵɵelementStart(6, "a", 5);
        i0.ɵɵtext(7, "Profiles");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("queryParams", i0.ɵɵpureFunction0(1, _c0));
    } }, directives: [i1.RouterLinkActive, i1.RouterLinkWithHref], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NavbarComponent, [{
        type: Component,
        args: [{
                selector: 'navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=navbar.component.js.map