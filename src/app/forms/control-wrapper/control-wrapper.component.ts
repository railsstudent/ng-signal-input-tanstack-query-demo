import { Component } from '@angular/core';

@Component({
  selector: 'app-control-wrapper',
  standalone: true,
  imports: [],
  template: `
    <p>
      control-wrapper works!
    </p>
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
        padding: 0px;
        margin: 0px;
      }
    }
    :host {
      display: flex;
      flex-direction: column;
      padding-bottom: 8px;
    }
  `
})
export class ControlWrapperComponent {

}
