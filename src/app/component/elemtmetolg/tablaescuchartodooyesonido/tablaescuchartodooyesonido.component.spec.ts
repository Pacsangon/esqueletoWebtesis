import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaescuchartodooyesonidoComponent } from './tablaescuchartodooyesonido.component';

describe('TablaescuchartodooyesonidoComponent', () => {
  let component: TablaescuchartodooyesonidoComponent;
  let fixture: ComponentFixture<TablaescuchartodooyesonidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaescuchartodooyesonidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaescuchartodooyesonidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
