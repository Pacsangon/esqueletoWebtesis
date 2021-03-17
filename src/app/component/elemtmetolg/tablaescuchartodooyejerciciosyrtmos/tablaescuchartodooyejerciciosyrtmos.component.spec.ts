import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaescuchartodooyejerciciosyrtmosComponent } from './tablaescuchartodooyejerciciosyrtmos.component';

describe('TablaescuchartodooyejerciciosyrtmosComponent', () => {
  let component: TablaescuchartodooyejerciciosyrtmosComponent;
  let fixture: ComponentFixture<TablaescuchartodooyejerciciosyrtmosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaescuchartodooyejerciciosyrtmosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaescuchartodooyejerciciosyrtmosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
