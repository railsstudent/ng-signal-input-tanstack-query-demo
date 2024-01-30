import { Directive, Output, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Directive({
  selector: 'form',
  standalone: true
})
export class FormDirective {
  private readonly ngForm = inject(NgForm, { self: true });

  constructor() { }

  @Output()
  public readonly formValueChanbge = this.ngForm.form.valueChanges.pipe(
    debounceTime(0)
  );
}