import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';

@Component({
  // La barra è condivisa da tutte le pagine, mentre il router cambia il contenuto sottostante.
  imports: [RouterOutlet, Navbar],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {}
