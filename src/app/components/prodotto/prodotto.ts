import { Component, input, output } from '@angular/core';
import { ProdottoInterface } from '../../types/prodotto';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  // imports dichiara ciò che questo template usa: navigazione interna e formattazione della valuta.
  imports: [RouterLink, CurrencyPipe],
  // Il genitore può inserire la scheda nel proprio template usando <app-prodotto>.
  selector: 'app-prodotto',
  templateUrl: './prodotto.html',
})
export class Prodotto {
  /**
   * input.required dichiara un dato obbligatorio fornito dal genitore.
   * input() crea un signal: le parentesi prodotto() ne leggono il valore corrente.
   */
  readonly prodotto = input.required<ProdottoInterface>();

  /**
   * output crea un evento tipizzato che può essere ascoltato dal genitore con (eliminato).
   * Il valore dell'evento è un prodotto, così il genitore sa quale elemento rimuovere.
   */
  readonly eliminato = output<ProdottoInterface>();

  /** Invia al genitore il prodotto corrente; emit è il metodo che pubblica il valore dell'evento. */
  elimina() {
    this.eliminato.emit(this.prodotto());
  }

  /** Hook Angular eseguito dopo la creazione: qui stampa i dati per facilitare il debug. */
  ngOnInit() {
    console.log('prodotto montato', this.prodotto());
  }

  /** Hook Angular eseguito quando la scheda viene rimossa: stampa i dati per facilitare il debug. */
  ngOnDestroy() {
    console.log('prodotto smontato', this.prodotto());
  }
}
