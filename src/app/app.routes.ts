import { Routes } from '@angular/router';
import { Catalogo } from './pages/catalogo/catalogo';
import { Carrello } from './pages/carrello/carrello';
import { NotFound } from './pages/not-found/not-found';

// Routes è il tipo Angular per l'elenco di corrispondenze tra URL e componenti da visualizzare.
export const routes: Routes = [
  // path vuoto corrisponde all'indirizzo principale del sito, per esempio "/".
  {
    path: '',
    component: Catalogo,
  },
  // I due punti indicano un parametro variabile: per esempio "dettaglio-prodotto/5" ha id "5".
  // Il componente viene importato solo quando serve, così non si carica all'avvio dell'app.
  {
    path: 'dettaglio-prodotto/:id',
    // import() carica il file in modo dinamico; then seleziona dal file la classe del componente.
    loadComponent: () =>
      import('./pages/dettaglio-prodotto/dettaglio-prodotto').then((m) => m.DettaglioProdotto),
  },
  // Questa corrispondenza apre la pagina Carrello quando l'indirizzo è "/carrello".
  {
    path: 'carrello',
    component: Carrello,
    // Per aggiungere una pagina figlia come "/carrello/checkout", si può definire children.
    // La pagina Carrello dovrebbe avere un proprio <router-outlet /> per mostrare quella pagina figlia.
    /* children:[
      {
        path: 'checkout',
        component: Checkout
      }
    ] */
  },
  // "*" corrisponde a qualsiasi percorso non coperto dalle route precedenti; va lasciato in fondo.
  {
    path: '**',
    component: NotFound,
  },
];
