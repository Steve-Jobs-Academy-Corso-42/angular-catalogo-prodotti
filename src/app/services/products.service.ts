import { inject, Service, signal } from '@angular/core';

import { ProdottoInterface } from '../types/prodotto';
import { HttpClient } from '@angular/common/http';

/**
 * Condivide i prodotti e le operazioni del catalogo tra i componenti.
 * La richiesta HTTP del singolo prodotto appartiene invece alla pagina di dettaglio.
 */
@Service()
export class ProductsService {
  /** Angular fornisce il client configurato per inviare richieste HTTP. */
  readonly http = inject(HttpClient);

  /** Elenco privato: i componenti non possono sostituirlo direttamente. */
  private readonly prodotti = signal<ProdottoInterface[]>([]);

  /** Segnali di stato che il template può leggere per mostrare caricamento ed errore del catalogo. */
  readonly loading = signal<boolean>(false);
  readonly error = signal<boolean>(false);

  /**
   * asReadonly espone una versione leggibile dei signal:
   * i componenti possono chiamarli per ottenere il valore, ma solo il service può modificarli.
   */
  readonly prodotti$ = this.prodotti.asReadonly();
  readonly loading$ = this.loading.asReadonly();
  readonly error$ = this.error.asReadonly();

  /** Scarica l'intero catalogo e aggiorna i signal in base all'esito della richiesta. */
  fetchProducts() {
    // Prima di un nuovo tentativo togliamo l'errore precedente e mostriamo lo stato di caricamento.
    this.error.set(false);
    // Il template legge questo signal per mostrare l'indicatore durante la richiesta.
    this.loading.set(true);

    this.http.get<ProdottoInterface[]>('https://fakestoreapi.com/products').subscribe({
      // next viene chiamato quando il server risponde correttamente e riceve il corpo della risposta.
      next: (prodotti) => {
        this.prodotti.set(prodotti);
        // La risposta è arrivata: il caricamento è terminato e il template può mostrare i prodotti.
        this.loading.set(false);
      },
      // error viene chiamato al posto di next se la rete o il server restituiscono un errore.
      error: (errore: unknown) => {
        console.error('Errore durante il caricamento del catalogo:', errore);
        this.error.set(true);
        // Anche in caso di errore la richiesta è terminata: non lasciare lo spinner attivo.
        this.loading.set(false);
      },
    });
  }

  /**
   * Aggiunge un prodotto creando un nuovo array invece di modificare quello esistente.
   * set notifica così ai componenti che leggono il signal che il catalogo è cambiato.
   */
  addProduct(prodotto: ProdottoInterface) {
    // ... copia gli elementi attuali; la virgola aggiunge il nuovo prodotto in fondo.
    this.prodotti.set([...this.prodotti(), prodotto]);
  }

  /** Rimuove dal catalogo il prodotto che corrisponde all'identificativo ricevuto. */
  removeProduct(id: number) {
    // filter crea un nuovo array mantenendo solo i prodotti con un id diverso da quello da eliminare.
    this.prodotti.set(this.prodotti().filter((prodotto) => prodotto.id !== id));

    // Messaggio di debug: mostra l'id rimosso e quanti prodotti restano.
    console.log('PRODOTTO ID:', id, this.prodotti().length);
  }
}
