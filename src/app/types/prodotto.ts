export interface ProdottoInterface {
  /** Identificativo numerico univoco del prodotto nel catalogo. */
  id: number;
  /** Nome breve mostrato nella scheda del prodotto. */
  titolo: string;
  /** Testo descrittivo del prodotto. */
  descrizione: string;
  /** Valore numerico del prezzo, formattato nella scheda tramite CurrencyPipe. */
  prezzo: number;
  /** Indica se il prodotto è attualmente disponibile. */
  disponibile: boolean;
  /** Data in cui il prodotto è stato inserito nel catalogo. */
  dataInserimento: Date;
}
