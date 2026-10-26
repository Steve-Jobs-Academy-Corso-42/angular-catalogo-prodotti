import { Component, input, output } from '@angular/core';
import { ProdottoInterface } from '../../types/prodotto';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  // Questa scheda riutilizzabile riceve i dati e le pipe usate per formattarli.
  imports: [RouterLink, CurrencyPipe, DatePipe],
  selector: 'app-prodotto',
  templateUrl: './prodotto.html',
})
export class Prodotto {
  /** Prodotto da visualizzare; è obbligatorio e viene fornito dal componente genitore. */
  prodotto = input.required<ProdottoInterface>();

  /** Evento emesso al genitore quando l'utente richiede di eliminare questo prodotto. */
  eliminato = output<ProdottoInterface>();

  /** Notifica al genitore quale prodotto è stato richiesto per l'eliminazione. */
  elimina() {
    this.eliminato.emit(this.prodotto());
  }

  /** Registra in console i dati della scheda quando il componente viene inizializzato. */
  ngOnInit() {
    console.log('prodotto montato', this.prodotto());
  }

  /** Registra in console i dati della scheda quando il componente viene distrutto. */
  ngOnDestroy() {
    console.log('prodotto smontato', this.prodotto());
  }
}
