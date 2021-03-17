import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaescuchartodooyeritmorespiracionComponent } from './tablaescuchartodooyeritmorespiracion.component';

describe('TablaescuchartodooyeritmorespiracionComponent', () => {
  let component: TablaescuchartodooyeritmorespiracionComponent;
  let fixture: ComponentFixture<TablaescuchartodooyeritmorespiracionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaescuchartodooyeritmorespiracionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaescuchartodooyeritmorespiracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
