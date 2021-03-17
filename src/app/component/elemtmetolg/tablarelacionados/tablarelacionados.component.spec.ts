import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablarelacionadosComponent } from './tablarelacionados.component';

describe('TablarelacionadosComponent', () => {
  let component: TablarelacionadosComponent;
  let fixture: ComponentFixture<TablarelacionadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablarelacionadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablarelacionadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
