import { Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../services/followers.service";
import * as i3 from "@angular/common";
const _c0 = function (a1, a2) { return ["/followers", a1, a2]; };
function FollowersComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelement(1, "img", 2);
    i0.ɵɵelementStart(2, "div", 3);
    i0.ɵɵelementStart(3, "h5", 4);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "a", 5);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "div");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const follower_r7 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("src", follower_r7.avatar_url, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction2(4, _c0, follower_r7.id, follower_r7.login));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(follower_r7.login);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(follower_r7.html_url);
} }
export class FollowersComponent {
    constructor(route, service) {
        this.route = route;
        this.service = service;
    }
    ngOnInit() {
        combineLatest([
            this.route.paramMap,
            this.route.queryParamMap
        ])
            .pipe(switchMap(combined => {
            let id = combined[0].get('id');
            let page = combined[1].get('page');
            return this.service.getAll();
        }))
            .subscribe(followers => this.followers = followers);
        /*
            .subscribe(combined =>{
              let id = combined[0].get('id');
              let page = combined[1].get('page');
        
              //this.service.getAll({id: id, page: page})
              this.service.getAll()
              .subscribe(response => this.followers = response);
            });
        */
    }
}
FollowersComponent.ɵfac = function FollowersComponent_Factory(t) { return new (t || FollowersComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.FollowersService)); };
FollowersComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FollowersComponent, selectors: [["followers"]], decls: 1, vars: 1, consts: [["class", "media", 4, "ngFor", "ngForOf"], [1, "media"], [1, "mr-3", "avatar", 3, "src"], [1, "media-body"], [1, "mt-0", 3, "routerLink"], ["href", "follower.html_url"]], template: function FollowersComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, FollowersComponent_div_0_Template, 8, 7, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.followers);
    } }, directives: [i3.NgForOf, i1.RouterLink], styles: [".avatar[_ngcontent-%COMP%] {\r\n    width:  80px;\r\n    height: 80px;\r\n    border-radius: 100%;\r\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FollowersComponent, [{
        type: Component,
        args: [{
                selector: 'followers',
                templateUrl: './followers.component.html',
                styleUrls: ['./followers.component.css']
            }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i2.FollowersService }]; }, null); })();
//# sourceMappingURL=followers.component.js.map