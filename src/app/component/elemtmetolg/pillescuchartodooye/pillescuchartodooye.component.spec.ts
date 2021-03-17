import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillescuchartodooyeComponent } from './pillescuchartodooye.component';

describe('PillescuchartodooyeComponent', () => {
  let component: PillescuchartodooyeComponent;
  let fixture: ComponentFixture<PillescuchartodooyeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillescuchartodooyeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillescuchartodooyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
