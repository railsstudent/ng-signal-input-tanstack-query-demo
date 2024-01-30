import { Directive, Output, inject } from '@angular/core';
import { AbstractControl, NgForm } from '@angular/forms';
import { debounceTime, map } from 'rxjs';

@Directive({
  selector: 'form',
  standalone: true
})
export class FormDirective {
  private readonly ngForm = inject(NgForm, { self: true });

  @Output()
  public readonly formValueChange = this.ngForm.form.valueChanges.pipe(
    debounceTime(0)
  );

  @Output()
  public readonly invalidChange = this.formValueChange.pipe(
    map((() => this.ngForm.invalid || false))
  );

  @Output()
  public readonly formControlsArray = this.ngForm.ngSubmit.pipe(
    map(() => { 
      const controls: AbstractControl[] = [];
      for (const key of Object.keys(this.ngForm.controls)) {
        controls.push(this.ngForm.controls[key]);
      }
      return controls;
    })
  );
}
