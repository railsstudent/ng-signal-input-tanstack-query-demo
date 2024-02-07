import { Directive, Input, Output, effect, inject, input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { debounceTime, map, tap } from 'rxjs';
import { SuiteResult } from 'vest';

@Directive({
  selector: 'form',
  standalone: true
})
export class FormDirective<T> {
  readonly ngForm = inject(NgForm, { self: true });

  shouldMarkAsPristine = input(false);
  public formValue = input<T | null>(null);
  public suite = input<((formValue: T, field: string) => SuiteResult<string, string>) | null>(null);

  constructor() {
    effect(() => {
      if (this.shouldMarkAsPristine()) {
        for (const key of Object.keys(this.ngForm.controls)) {
          this.ngForm.controls[key].markAsPristine();
        }
      }    
    });

    this.ngForm.ngSubmit.subscribe(() => {
      this.ngForm.form.markAllAsTouched();
    });
  }

  @Output()
  public readonly formValueChange = this.ngForm.form.valueChanges.pipe(
    debounceTime(0),
    tap(() => {
      console.log(this.ngForm.form, this.ngForm);
      console.log(this.ngForm.form.controls['title'].errors);
      console.log(this.ngForm.form.controls['description'].errors);
      console.log(this.ngForm.form.controls['price'].errors);
    }));

  @Output()
  public readonly invalidChange = this.formValueChange.pipe(
    map((() => this.ngForm.invalid || false))
  );
}
