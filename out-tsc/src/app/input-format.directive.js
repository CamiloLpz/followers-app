import { __decorate } from "tslib";
import { Directive, HostListener, Input } from '@angular/core';
let InputFormatDirective = class InputFormatDirective {
    constructor(el) {
        this.el = el;
    }
    onBlur() {
        console.log("on Blur");
        let value = this.el.nativeElement.value;
        if (this.format == 'lowercase')
            this.el.nativeElement.value = value.toLowerCase();
        else
            this.el.nativeElement.value = value.toUpperCase();
    }
};
__decorate([
    Input('format')
], InputFormatDirective.prototype, "format", void 0);
__decorate([
    HostListener('blur')
], InputFormatDirective.prototype, "onBlur", null);
InputFormatDirective = __decorate([
    Directive({
        selector: '[appInputFormat]'
    })
], InputFormatDirective);
export { InputFormatDirective };
//# sourceMappingURL=input-format.directive.js.map