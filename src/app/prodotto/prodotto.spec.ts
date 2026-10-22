import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Prodotto } from './prodotto';

describe('Prodotto', () => {
  let component: Prodotto;
  let fixture: ComponentFixture<Prodotto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prodotto],
    }).compileComponents();

    fixture = TestBed.createComponent(Prodotto);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('prodotto', {
      id: 1,
      titolo: 'Pane',
      descrizione: 'Pane fresco',
      prezzo: 3,
      disponibile: true,
      dataInserimento: new Date('2026-01-01'),
    });
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
