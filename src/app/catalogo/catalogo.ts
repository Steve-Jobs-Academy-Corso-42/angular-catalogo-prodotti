import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Prodotto } from '../prodotto/prodotto';
import { ProdottoInterface } from '../types/prodotto';

@Component({
  imports: [Prodotto, FormsModule],
  selector: 'app-catalogo',
  templateUrl: './catalogo.html',
})
export class Catalogo {
  showDisponibili = true;

  /** Dati dimostrativi locali; non sono collegati a un servizio o database. */
  prodotti: ProdottoInterface[] = [
    {
      id: 0,
      titolo: 'Pane',
      descrizione: 'Descrizione pane 1',
      prezzo: 1099,
      disponibile: true,
      dataInserimento: new Date(),
    },
    {
      id: 1,
      titolo: 'Prodotto 2',
      descrizione: 'Descrizione prodotto 2',
      prezzo: 1299,
      disponibile: false,
      dataInserimento: new Date(),
    },
    {
      id: 2,
      titolo: 'Prodotto 3',
      descrizione: 'Descrizione prodotto 3',
      prezzo: 899,
      disponibile: true,
      dataInserimento: new Date(),
    },
    {
      id: 3,
      titolo: 'Prodotto 4',
      descrizione: 'Descrizione prodotto 4',
      prezzo: 1499,
      disponibile: true,
      dataInserimento: new Date(),
    },
  ];

  selezionaProdotto(prodotto: ProdottoInterface) {
    const index = this.prodotti.findIndex((el) => el.id === prodotto.id);

    if (index !== -1) {
      this.prodotti[index].titolo = String(Math.round(Math.random() * 100));
    }
  }
}
