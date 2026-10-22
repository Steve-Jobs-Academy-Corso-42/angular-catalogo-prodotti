import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Avvia il componente principale con la configurazione globale dell'applicazione.
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
