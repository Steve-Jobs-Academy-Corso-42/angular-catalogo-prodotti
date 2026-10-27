import { Component, inject } from '@angular/core';
import { Prodotto } from '../../components/prodotto/prodotto';
import { ProdottoInterface } from '../../types/prodotto';
import { ProductsService } from '../../services/products.service';

@Component({
  // imports rende utilizzabile nel template la scheda figlia app-prodotto.
  imports: [Prodotto],
  // selector è il nome del tag HTML associato a questa pagina.
  selector: 'app-catalogo',
  templateUrl: './catalogo.html',
})
export class Catalogo {
  /** Angular fornisce il service condiviso che carica e modifica l'elenco dei prodotti. */
  readonly prodottiService = inject(ProductsService);

  /** Riceve dalla scheda il prodotto scelto e delega al service la rimozione dal catalogo. */
  eliminaProdotto(prodotto: ProdottoInterface) {
    this.prodottiService.removeProduct(prodotto.id);
  }

  /** ngOnInit è chiamato da Angular una volta, quando la pagina viene inizializzata. */
  ngOnInit() {
    // La pagina chiede al service i dati; il service gestisce richiesta e stato condiviso.
    this.prodottiService.fetchProducts();
  }
}
