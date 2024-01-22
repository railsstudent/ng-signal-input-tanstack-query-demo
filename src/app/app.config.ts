import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { TitleStrategy, provideRouter, withComponentInputBinding } from '@angular/router';
import { QueryClient, provideAngularQuery } from '@tanstack/angular-query-experimental';
import { routes } from './app.routes';
import { ShopPageTitleStrategy } from './shop-page-title.strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes, withComponentInputBinding()),
    provideAngularQuery(new QueryClient()),
    {
      provide: TitleStrategy,
      useClass: ShopPageTitleStrategy,
    }
  ]
};
