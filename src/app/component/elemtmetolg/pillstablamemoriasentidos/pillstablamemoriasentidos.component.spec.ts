import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillstablamemoriasentidosComponent } from './pillstablamemoriasentidos.component';

describe('PillstablamemoriasentidosComponent', () => {
  let component: PillstablamemoriasentidosComponent;
  let fixture: ComponentFixture<PillstablamemoriasentidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillstablamemoriasentidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillstablamemoriasentidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
