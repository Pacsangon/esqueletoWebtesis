import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemplocaldeamientoComponent } from './ejemplocaldeamiento.component';

describe('EjemplocaldeamientoComponent', () => {
  let component: EjemplocaldeamientoComponent;
  let fixture: ComponentFixture<EjemplocaldeamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjemplocaldeamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemplocaldeamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
