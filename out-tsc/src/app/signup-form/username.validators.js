export class UsernameValidators {
    static cannotContainSpace(control) {
        if (control.value.indexOf(' ') >= 0)
            return { cannotContainSpace: true };
        return null;
    }
}
//# sourceMappingURL=username.validators.js.map