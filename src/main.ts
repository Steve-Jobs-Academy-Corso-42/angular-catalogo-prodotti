import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// bootstrapApplication crea e avvia l'app Angular senza bisogno di un modulo NgModule.
// Il primo argomento è il componente radice; il secondo fornisce la configurazione globale.
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
