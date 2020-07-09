import { TestBed } from '@angular/core/testing';
import { EmailService } from './email.service';
describe('EmailService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(EmailService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=email.service.spec.js.map