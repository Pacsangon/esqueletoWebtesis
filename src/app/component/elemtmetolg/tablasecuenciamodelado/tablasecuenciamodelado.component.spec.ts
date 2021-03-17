import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablasecuenciamodeladoComponent } from './tablasecuenciamodelado.component';

describe('TablasecuenciamodeladoComponent', () => {
  let component: TablasecuenciamodeladoComponent;
  let fixture: ComponentFixture<TablasecuenciamodeladoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablasecuenciamodeladoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablasecuenciamodeladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
