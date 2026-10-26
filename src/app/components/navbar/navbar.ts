import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  // Importa le direttive Router necessarie ai collegamenti e allo stato della pagina attiva.
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-navbar',
  templateUrl: './navbar.html',
})
export class Navbar {}
