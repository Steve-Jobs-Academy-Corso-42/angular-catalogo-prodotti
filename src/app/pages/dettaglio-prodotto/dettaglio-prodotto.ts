import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, inject, input, numberAttribute, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProdottoInterface } from '../../types/prodotto';

/**
 * Unione discriminata: status identifica quale variante è attiva.
 * In questo modo "success" contiene sempre un prodotto, mentre gli altri stati non lo richiedono.
 */
type DettaglioState =
  | { status: 'loading' }
  | { status: 'success'; prodotto: ProdottoInterface }
  | { status: 'not-found' }
  | { status: 'error' };

@Component({
  // imports rende RouterLink utilizzabile nel template per navigare senza ricaricare la pagina.
  imports: [RouterLink],
  selector: 'app-dettaglio-prodotto',
  templateUrl: './dettaglio-prodotto.html',
})
export class DettaglioProdotto {
  /**
   * input.required riceve il parametro :id dalla route.
   * numberAttribute trasforma il testo dell'URL, per esempio "5", nel numero 5.
   */
  readonly id = input.required<number, string>({ transform: numberAttribute });

  /** inject chiede ad Angular un'istanza configurata del client HTTP. */
  private readonly http = inject(HttpClient);

  /** signal conserva lo stato corrente e aggiorna automaticamente il template quando cambia. */
  readonly state = signal<DettaglioState>({ status: 'loading' });

  /** Angular chiama ngOnInit una volta dopo aver creato il componente e assegnato i suoi input. */
  ngOnInit() {
    const id = this.id();

    // Number.isInteger verifica che sia un numero intero; id < 1 scarta zero e numeri negativi.
    // return interrompe il metodo, quindi l'URL non valido non genera una richiesta HTTP.
    if (!Number.isInteger(id) || id < 1) {
      this.state.set({ status: 'not-found' });
      return;
    }

    this.state.set({ status: 'loading' });

    // get prepara la richiesta HTTP e il tipo tra <> descrive i dati attesi dall'API.
    // subscribe avvia davvero la richiesta; l'oggetto permette di gestire separatamente successo ed errore.
    this.http.get<ProdottoInterface>(`https://fakestoreapi.com/products/${id}`).subscribe({
      // next è la funzione chiamata quando arriva una risposta valida; "prodotto" è il suo corpo.
      next: (prodotto) => {
        // === confronta valore e tipo: qui verifica che l'API abbia restituito proprio l'id richiesto.
        const idCorrisponde = prodotto.id === id;

        // La condizione prima di ? è il test del ternario:
        // se è vera usa il valore dopo ?; se è falsa usa quello dopo :.
        this.state.set(
          idCorrisponde ? { status: 'success', prodotto } : { status: 'not-found' },
        );
      },
      // error viene chiamato per errori HTTP o di rete. unknown significa che il tipo non è noto:
      // prima di accedere a status dobbiamo controllare quale oggetto abbiamo ricevuto.
      error: (error: unknown) => {
        console.error('Errore durante il caricamento del prodotto:', error);

        this.state.set({
          // instanceof verifica se l'oggetto è un'istanza di HttpErrorResponse, la classe usata da Angular
          // per gli errori HTTP. && valuta il secondo controllo solo se il primo è vero (short-circuit),
          // quindi leggiamo status soltanto dopo aver riconosciuto il tipo di errore.
          // Il ternario converte un HTTP 404 in "not-found" e qualsiasi altro errore in "error".
          status:
            error instanceof HttpErrorResponse && error.status === 404 ? 'not-found' : 'error',
        });
      },
    });
  }
}
