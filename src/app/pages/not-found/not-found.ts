import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  // RouterLink gestisce la navigazione interna verso il catalogo.
  imports: [RouterLink],
  selector: 'app-not-found',
  templateUrl: './not-found.html',
})
export class NotFound {}
