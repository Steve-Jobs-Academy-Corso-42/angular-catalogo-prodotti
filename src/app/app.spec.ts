import { TestBed } from '@angular/core/testing';
import { App } from './app';

// describe raggruppa i test relativi al componente principale App.
describe('App', () => {
  // beforeEach viene eseguito prima di ogni test per preparare un ambiente Angular pulito.
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // imports registra il componente standalone che il test deve creare.
      imports: [App],
      // compileComponents prepara template e componenti prima che il test li usi.
    }).compileComponents();
  });

  // it definisce un singolo comportamento che vogliamo verificare.
  it('should create the app', () => {
    // TestBed crea il componente in un ambiente di test, senza avviare il browser reale.
    const fixture = TestBed.createComponent(App);
    // fixture contiene sia l'istanza TypeScript sia il relativo elemento HTML.
    const app = fixture.componentInstance;
    // expect dichiara il risultato atteso; toBeTruthy verifica che l'istanza esista.
    expect(app).toBeTruthy();
  });

  it('should render the catalog', async () => {
    const fixture = TestBed.createComponent(App);
    // Attende che Angular completi il rendering e le attività asincrone avviate dal componente.
    await fixture.whenStable();
    // nativeElement è l'HTML prodotto dal componente, interrogabile come un normale elemento DOM.
    const compiled = fixture.nativeElement as HTMLElement;
    // Verifica che il primo titolo della pagina contenga il testo atteso del catalogo.
    expect(compiled.querySelector('h1')?.textContent).toContain('CATALOGO');
  });
});
