import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  // RouterLink rende disponibile nel template il collegamento interno verso il catalogo.
  imports: [RouterLink],
  // Il Router usa questo selettore per mostrare la pagina 404.
  selector: 'app-not-found',
  templateUrl: './not-found.html',
})
// La pagina non richiede logica TypeScript: il messaggio e il link sono definiti nel template.
export class NotFound {}
