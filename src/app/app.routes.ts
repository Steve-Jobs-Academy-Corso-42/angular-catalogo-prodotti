import { Routes } from '@angular/router';
import { Catalogo } from './pages/catalogo/catalogo';
import { Carrello } from './pages/carrello/carrello';
import { DettaglioProdotto } from './pages/dettaglio-prodotto/dettaglio-prodotto';
import { NotFound } from './pages/not-found/not-found';

// Associa ogni URL alla pagina Angular che il Router deve visualizzare.
export const routes: Routes = [
  // L'URL iniziale apre la pagina del catalogo.
  {
    path: '',
    component: Catalogo,
  },
  // Il parametro :id viene passato all'input omonimo della pagina di dettaglio.
  {
    path: 'dettaglio-prodotto/:id',
    component: DettaglioProdotto,
  },
  // Il percorso /carrello apre la pagina del carrello.
  {
    path: 'carrello',
    component: Carrello,
  },
  // Qualsiasi URL non riconosciuto mostra la pagina di errore 404.
  {
    path: '**',
    component: NotFound,
  },
];
