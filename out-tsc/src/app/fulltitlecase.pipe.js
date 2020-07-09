import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let FullTitleCasePipe = class FullTitleCasePipe {
    transform(value) {
        if (!value)
            return null;
        let words = value.split(" ");
        for (var i = 0; i < words.length; i++) {
            let word = words[i];
            if (!this.isPreposition(word)) {
                words[i] = this.toTitleCase(word);
            }
            else if (i == 0) {
                words[i] = this.toTitleCase(word);
            }
            else {
                words[i] = word.toLowerCase();
            }
        }
        return words.join(' ');
    }
    toTitleCase(word) {
        return word.substr(0, 1).toUpperCase() + word.substr(1, word.length).toLowerCase();
    }
    isPreposition(word) {
        let prepositions = [
            "a",
            "the",
            "of"
        ];
        return prepositions.includes(word.toLowerCase());
    }
};
FullTitleCasePipe = __decorate([
    Pipe({
        name: 'fulltitlecase'
    })
], FullTitleCasePipe);
export { FullTitleCasePipe };
//# sourceMappingURL=fulltitlecase.pipe.js.map