import { FormDirective } from './form.directive';
import { Directive, inject } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { createValidator, getFormControlField } from './utils';

@Directive({
    selector: '[ngModel]',
    standalone: true,
    providers: [
        { provide: NG_VALIDATORS, useExisting: FormModelDirective, multi: true },
    ],
})
export class FormModelDirective implements Validator {
    private formDirective = inject(FormDirective);
    public validate(control: AbstractControl): ValidationErrors | null {
        const { ngForm, suite, formValue } = this.formDirective;

        const formValueValue = formValue();
        const suiteValue = suite();
        if (!suiteValue || !formValueValue) {
            throw new Error('suite or formValue is missing');
        }
        const field = getFormControlField(ngForm.control, control);
        const validator = createValidator(field, formValueValue, suiteValue);
        return validator(control);
    }
}
