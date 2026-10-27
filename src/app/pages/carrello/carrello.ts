import { Component } from '@angular/core';

@Component({
  // Il template attuale contiene solo un testo segnaposto e non usa altri componenti.
  imports: [],
  // Il Router mostra questo componente quando l'indirizzo è "/carrello".
  selector: 'app-carrello',
  templateUrl: './carrello.html',
})
// La classe è vuota perché la pagina carrello non ha ancora logica applicativa.
export class Carrello {}
