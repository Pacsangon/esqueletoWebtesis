import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdTabsetJustifyComponent } from './ngbd-tabset-justify.component';

describe('NgbdTabsetJustifyComponent', () => {
  let component: NgbdTabsetJustifyComponent;
  let fixture: ComponentFixture<NgbdTabsetJustifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbdTabsetJustifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdTabsetJustifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
