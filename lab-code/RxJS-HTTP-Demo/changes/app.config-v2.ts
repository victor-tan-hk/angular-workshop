import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

// Import provideHTTPClient to include the providers
// metadata array
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  // Make sure to include HttpClient
  // in providers Metadata array to be used
  // by the fakeAPI service
  providers: [provideRouter(routes), provideHttpClient()]
};
