import { Directive, Output, effect, inject, input } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  constructor() {
    effect(() => {
      if (this.shouldMarkAsUntouched()) {
        this.ngForm.form.markAsUntouched()
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
}
