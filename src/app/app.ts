import { Component } from '@angular/core';
import { Catalogo } from './catalogo/catalogo';

@Component({
  imports: [Catalogo],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {}
