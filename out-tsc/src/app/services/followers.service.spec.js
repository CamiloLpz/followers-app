import { TestBed } from '@angular/core/testing';
import { FollowersService } from './followers.service';
describe('FollowersService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(FollowersService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=followers.service.spec.js.map