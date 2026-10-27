import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';

// Component collega una classe TypeScript al template HTML e alle dipendenze usate da quel template.
@Component({
  // imports elenca i componenti e le direttive usati nel template app.html.
  // La barra resta visibile in ogni pagina; RouterOutlet indica dove il Router inserisce la pagina corrente.
  imports: [RouterOutlet, Navbar],
  // selector è il nome del tag HTML con cui Angular può usare questo componente.
  selector: 'app-root',
  // Il template è conservato in un file HTML separato invece che scritto qui dentro.
  templateUrl: './app.html',
})
// App è il componente radice: Angular lo avvia per contenere il resto dell'applicazione.
export class App {}
