import { Service, signal } from '@angular/core';

import { ProdottoInterface } from '../types/prodotto';

/** Centralizza lo stato del catalogo e le operazioni di aggiunta e rimozione. */
@Service()
export class ProductsService {
  /** Catalogo reattivo inizializzato con prodotti dimostrativi e conservato solo in memoria. */
  private readonly prodotti = signal<ProdottoInterface[]>([
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
      titolo: 'Pasta',
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
  ]);

  /** Vista in sola lettura del catalogo, esposta ai componenti senza consentire modifiche dirette. */
  readonly prodotti$ = this.prodotti.asReadonly();

  /** Cerca un prodotto per identificativo e restituisce undefined se non è presente. */
  getProduct(id: number) {
    return this.prodotti().find((prodotto) => prodotto.id == id);
  }

  /** Aggiunge un prodotto creando un nuovo array, così il signal notifica il cambiamento. */
  addProduct(prodotto: ProdottoInterface) {
    this.prodotti.set([...this.prodotti(), prodotto]);
  }

  /** Rimuove dal catalogo il prodotto che corrisponde all'identificativo ricevuto. */
  removeProduct(id: number) {
    this.prodotti.set(this.prodotti().filter((prodotto) => prodotto.id !== id));

    console.log('PRODOTTO ID:', id, this.prodotti().length);
  }
}
