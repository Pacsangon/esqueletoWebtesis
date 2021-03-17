import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaescuchartodooyeritmosinternosComponent } from './tablaescuchartodooyeritmosinternos.component';

describe('TablaescuchartodooyeritmosinternosComponent', () => {
  let component: TablaescuchartodooyeritmosinternosComponent;
  let fixture: ComponentFixture<TablaescuchartodooyeritmosinternosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaescuchartodooyeritmosinternosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaescuchartodooyeritmosinternosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
