import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablasecuenciajuegosmascarasritualesComponent } from './tablasecuenciajuegosmascarasrituales.component';

describe('TablasecuenciajuegosmascarasritualesComponent', () => {
  let component: TablasecuenciajuegosmascarasritualesComponent;
  let fixture: ComponentFixture<TablasecuenciajuegosmascarasritualesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablasecuenciajuegosmascarasritualesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablasecuenciajuegosmascarasritualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
