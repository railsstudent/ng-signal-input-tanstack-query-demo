import { Directive, Output, effect, inject, input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { debounceTime, map } from 'rxjs';

@Directive({
  selector: 'form',
  standalone: true
})
export class FormDirective {
  private readonly ngForm = inject(NgForm, { self: true });

  shouldMarkAsPristine = input(false);

  constructor() {
    effect(() => {
      if (this.shouldMarkAsPristine()) {
        for (const key of Object.keys(this.ngForm.controls)) {
          this.ngForm.controls[key].markAsPristine();
        }
      }    
    });
  }

  @Output()
  public readonly formValueChange = this.ngForm.form.valueChanges.pipe(
    debounceTime(0)
  );

  @Output()
  public readonly invalidChange = this.formValueChange.pipe(
    map((() => this.ngForm.invalid || false))
  );
}
