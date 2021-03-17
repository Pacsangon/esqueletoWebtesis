import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaescuchartodooyemelodiaComponent } from './tablaescuchartodooyemelodia.component';

describe('TablaescuchartodooyemelodiaComponent', () => {
  let component: TablaescuchartodooyemelodiaComponent;
  let fixture: ComponentFixture<TablaescuchartodooyemelodiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaescuchartodooyemelodiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaescuchartodooyemelodiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
