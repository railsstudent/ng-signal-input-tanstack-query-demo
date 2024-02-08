import { DestroyRef, Directive, Output, effect, inject, input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AbstractControl, FormGroup, NgForm } from '@angular/forms';
import { debounceTime, map } from 'rxjs';
import { SuiteResult } from 'vest';

@Directive({
  selector: 'form',
  standalone: true
})
export class FormDirective<T> {
  readonly ngForm = inject(NgForm, { self: true });

  shouldMarkAsUntouched = input(false);
  public formValue = input<T | null>(null);
  public suite = input<((formValue: T, field: string) => SuiteResult<string, string>) | null>(null);
  public alwaysTriggerValidations = input.required<boolean>();

  constructor() {
    const destroy$ = inject(DestroyRef);

    effect(() => {
      const formGroup = this.ngForm.form;
      if (this.shouldMarkAsUntouched()) {
        formGroup.markAsUntouched()
      }
      
      if (this.alwaysTriggerValidations()) {
        formGroup.valueChanges
          .pipe(
            debounceTime(0),
            takeUntilDestroyed(destroy$),
          )
          .subscribe(() => this.updateValueAndValidityRecursive(formGroup));
      }
    });

    this.ngForm.ngSubmit.subscribe(() => {
      this.ngForm.form.markAllAsTouched();
    });
  }

  @Output()
  public readonly formValueChange = this.ngForm.form.valueChanges.pipe(debounceTime(0));

  @Output()
  public readonly invalidChange = this.formValueChange.pipe(
    map((() => this.ngForm.invalid || false))
  );

  private updateValueAndValidityRecursive(control: AbstractControl): void {
    if (control instanceof FormGroup) {
        control.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        Object.values(control.controls).forEach(subControl => {
            this.updateValueAndValidityRecursive(subControl);
        });
    } else {
        control.updateValueAndValidity({ onlySelf: true, emitEvent: false });
    }
  }
}
