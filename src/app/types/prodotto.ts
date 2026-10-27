/** Forma dei dati di un prodotto usata dalla UI e restituita dall'API Fake Store. */
export interface ProdottoInterface {
  /** Identificativo numerico univoco del prodotto nel catalogo. */
  id: number;
  /** Nome breve mostrato nella scheda del prodotto. */
  title: string;
  /** Testo descrittivo del prodotto. */
  description: string;
  /** Valore numerico del prezzo, formattato nella scheda tramite CurrencyPipe. */
  price: number;
  /** Indirizzo web dell'immagine del prodotto. */
  image: string;
  /** Nome della categoria a cui appartiene il prodotto. */
  category: string;
  /** Valutazione media (rate) e numero di recensioni (count). */
  rating: {
    count: number;
    rate: number;
  };
}
