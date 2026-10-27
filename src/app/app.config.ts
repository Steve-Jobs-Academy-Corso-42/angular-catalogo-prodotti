import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';

// appConfig raccoglie i servizi e le funzionalità disponibili in tutta l'applicazione.
export const appConfig: ApplicationConfig = {
  // providers registra funzionalità globali che Angular rende disponibili ai componenti.
  providers: [
    // Inoltra al browser gli errori globali non gestiti dall'applicazione.
    provideBrowserGlobalErrorListeners(),
    // Configura la navigazione usando le route e collega i parametri URL agli input omonimi.
    provideRouter(routes, withComponentInputBinding()),
  ],
};
