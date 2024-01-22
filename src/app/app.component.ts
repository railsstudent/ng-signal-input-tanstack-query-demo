import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularQueryDevtools } from '@tanstack/angular-query-devtools-experimental';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AngularQueryDevtools, NavBarComponent],
  template: `
    <angular-query-devtools initialIsOpen="true" />
    <div>
      <h2>Angular Tanstack Query Demo</h2>
      <app-nav-bar />
      <router-outlet />
    </div>
  `,
  styles: `
    div {
      padding: 0.75rem;
    }

    h2 {
      margin-bottom: 0.75rem;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
