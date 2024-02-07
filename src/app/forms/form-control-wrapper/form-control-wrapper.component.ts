import { Component, ContentChild, computed, inject } from '@angular/core';
import { NgModel, NgModelGroup } from '@angular/forms';

@Component({
  selector: '[app-control-wrapper]',
  standalone: true,
  imports: [],
  template: `
    <div class="input-wrapper__content">
      <ng-content></ng-content>
    </div>
    <div class="input-wrapper__errors">
      @if (!ngModelGroup && ngModel?.control?.errors && ngModel?.touched) {
        <ul class="errors">
          @for (error of ngModel?.control?.errors?.['errors']; track error) {
            <li>{{ error }}</li>
          }
        </ul>  
      }

      @if (ngModelGroup?.control?.errors && ngModelGroup?.touched) {
        <ul class="errors">
          @for (error of ngModelGroup?.control?.errors?.['errors']; track error) {
            <li>{{ error }}</li>
          }
        </ul>
      }
    </div>
  `,
  styles: `
    .input-wrapper__errors {
      margin-top: 8px;
      margin-left: 150px;
      width:200px;
      li {
        list-style-type: none;
        color: #ff0000;
      }
      ul {
        padding: 0.5rem;
        margin: 0px;
      }
    }
    :host {
      display: flex;
      flex-direction: column;
      padding-bottom: 8px;
    }

    .errors {
      padding: 0.5rem;
      border-radius: 8px;
      color: red;
      background: pink;
    }
  `,
  host: {
    'class.input-wrapper--invalid': 'invalid()',
  }
})
export class FormControlWrapperComponent {
  @ContentChild(NgModel) 
  public ngModel?: NgModel;

  public readonly ngModelGroup: NgModelGroup | null = inject(NgModelGroup, {
    optional: true,
    self: true
  });

  invalid = computed(() => {
    const isNgModelTouched = !this.ngModelGroup && !!this.ngModel?.control?.errors && !!this.ngModel?.touched;
    const isNgModelGroupTouched = !!this.ngModelGroup?.control?.errors && !!this.ngModelGroup?.touched;

    return isNgModelTouched || isNgModelGroupTouched;
  })
}
