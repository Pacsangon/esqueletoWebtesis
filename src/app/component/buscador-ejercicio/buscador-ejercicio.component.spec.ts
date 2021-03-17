import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorEjercicioComponent } from './buscador-ejercicio.component';

describe('BuscadorEjercicioComponent', () => {
  let component: BuscadorEjercicioComponent;
  let fixture: ComponentFixture<BuscadorEjercicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscadorEjercicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorEjercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
