import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  // RouterLink gestisce i link interni; RouterLinkActive aggiunge classi quando il link è la route corrente.
  imports: [RouterLink, RouterLinkActive],
  // selector permette agli altri template di inserire questa barra con <app-navbar>.
  selector: 'app-navbar',
  // L'HTML della barra è scritto nel file separato navbar.html.
  templateUrl: './navbar.html',
})
// Questo componente non ha logica TypeScript: serve a riunire la navigazione condivisa.
export class Navbar {}
