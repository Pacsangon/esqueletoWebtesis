import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadocampoComponent } from './resultadocampo.component';

describe('ResultadocampoComponent', () => {
  let component: ResultadocampoComponent;
  let fixture: ComponentFixture<ResultadocampoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadocampoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadocampoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
