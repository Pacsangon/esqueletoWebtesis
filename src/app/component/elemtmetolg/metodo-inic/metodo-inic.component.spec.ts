import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodoInicComponent } from './metodo-inic.component';

describe('MetodoInicComponent', () => {
  let component: MetodoInicComponent;
  let fixture: ComponentFixture<MetodoInicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetodoInicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetodoInicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
