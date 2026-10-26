import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Prodotto } from '../../components/prodotto/prodotto';
import { ProdottoInterface } from '../../types/prodotto';
import { ProductsService } from '../../services/products.service';

@Component({
  // La pagina riutilizza la scheda prodotto e il modulo per il filtro a checkbox.
  imports: [Prodotto, FormsModule],
  selector: 'app-catalogo',
  templateUrl: './catalogo.html',
})
export class Catalogo {
  /** Indica se mostrare tutti i prodotti oppure solo quelli disponibili. */
  showDisponibili = true;

  /** Service che fornisce il catalogo e ne gestisce le modifiche; i dati restano in memoria. */
  prodottiService = inject(ProductsService);

  /** Chiede al service di rimuovere dal catalogo il prodotto selezionato. */
  eliminaProdotto(prodotto: ProdottoInterface) {
    this.prodottiService.removeProduct(prodotto.id);
  }
}
