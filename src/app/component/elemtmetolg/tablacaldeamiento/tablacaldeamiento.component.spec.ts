import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablacaldeamientoComponent } from './tablacaldeamiento.component';

describe('TablacaldeamientoComponent', () => {
  let component: TablacaldeamientoComponent;
  let fixture: ComponentFixture<TablacaldeamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablacaldeamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablacaldeamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
