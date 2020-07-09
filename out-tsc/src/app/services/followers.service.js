import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class FollowersService extends DataService {
    constructor(http) {
        super('https://api.github.com/users/mosh-hamedani/followers', http);
    }
}
FollowersService.ɵfac = function FollowersService_Factory(t) { return new (t || FollowersService)(i0.ɵɵinject(i1.HttpClient)); };
FollowersService.ɵprov = i0.ɵɵdefineInjectable({ token: FollowersService, factory: FollowersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FollowersService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=followers.service.js.map