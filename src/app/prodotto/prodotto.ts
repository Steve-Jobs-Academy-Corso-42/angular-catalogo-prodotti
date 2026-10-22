import { Component, input, output } from '@angular/core';
import { ProdottoInterface } from '../types/prodotto';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe, DatePipe],
  selector: 'app-prodotto',
  templateUrl: './prodotto.html',
})
export class Prodotto {
  prodotto = input.required<ProdottoInterface>();

  selezionato = output<ProdottoInterface>();

  seleziona() {
    this.selezionato.emit(this.prodotto());
  }
}
