import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';


import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

import { BackendApi } from './data/api/backend.api';
import { BackendRepository } from './core/repository/backend.repository';
import { BackendRepositoryImpl } from './data/repository/backend.repository.impl';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    BackendApi,
    {
      provide: BackendRepository,
      useClass: BackendRepositoryImpl
    }
  ]
};
