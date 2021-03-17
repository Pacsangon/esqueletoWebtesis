import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosinicialesComponent } from './resultadosiniciales.component';

describe('ResultadosinicialesComponent', () => {
  let component: ResultadosinicialesComponent;
  let fixture: ComponentFixture<ResultadosinicialesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadosinicialesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosinicialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
