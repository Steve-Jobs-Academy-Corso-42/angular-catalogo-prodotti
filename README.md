# Catalogo prodotti

Piccola applicazione didattica per visualizzare un catalogo, filtrare i prodotti
disponibili e consultare i dettagli di ogni prodotto.

## Funzionalità

- Filtro per mostrare o nascondere i prodotti non disponibili.
- Schede prodotto con descrizione, prezzo, disponibilità e data di inserimento.
- Pulsante di esempio che dimostra la comunicazione tra componenti tramite eventi.
- Interfaccia responsive realizzata con Tailwind CSS e un tema personalizzato.

## Tecnologie

- Angular 22
- TypeScript
- Tailwind CSS 4

## Requisiti

- Node.js e npm compatibili con la versione di Angular CLI del progetto.

## Avvio in locale

Installa le dipendenze e avvia il server di sviluppo:

```bash
npm install
npm start
```

Apri [http://localhost:4200](http://localhost:4200). L'applicazione si aggiorna
automaticamente quando vengono modificati i file sorgente.

## Build e test

```bash
npm run build
npm test
```

La build di produzione viene generata nella cartella `dist/`.

## Struttura del progetto

- `src/app/catalogo/`: pagina del catalogo e filtro disponibilità.
- `src/app/prodotto/`: scheda riutilizzabile per i singoli prodotti.
- `src/app/types/`: tipi condivisi.
- `src/styles/`: tema Tailwind e stili globali di base.
