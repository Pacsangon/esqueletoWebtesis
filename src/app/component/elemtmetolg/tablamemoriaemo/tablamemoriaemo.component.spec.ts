import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablamemoriaemoComponent } from './tablamemoriaemo.component';

describe('TablamemoriaemoComponent', () => {
  let component: TablamemoriaemoComponent;
  let fixture: ComponentFixture<TablamemoriaemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablamemoriaemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablamemoriaemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
