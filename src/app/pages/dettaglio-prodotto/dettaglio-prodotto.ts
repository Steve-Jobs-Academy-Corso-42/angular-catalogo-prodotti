import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { ProdottoInterface } from '../../types/prodotto';

@Component({
  // RouterLink permette di tornare al catalogo senza ricaricare l'applicazione.
  imports: [RouterLink],
  selector: 'app-dettaglio-prodotto',
  templateUrl: './dettaglio-prodotto.html',
})
export class DettaglioProdotto {
  /** Identificativo ricevuto dal parametro :id della route. */
  readonly id = input.required<number>();

  /** Service usato per cercare il prodotto nel catalogo condiviso. */
  prodottiService = inject(ProductsService);

  /** Restituisce il prodotto corrispondente all'id oppure undefined se non esiste. */
  get prodotto(): ProdottoInterface | undefined {
    return this.prodottiService.getProduct(this.id());
  }
}
