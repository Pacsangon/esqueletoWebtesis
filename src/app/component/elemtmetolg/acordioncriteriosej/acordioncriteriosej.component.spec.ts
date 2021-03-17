import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcordioncriteriosejComponent } from './acordioncriteriosej.component';

describe('AcordioncriteriosejComponent', () => {
  let component: AcordioncriteriosejComponent;
  let fixture: ComponentFixture<AcordioncriteriosejComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcordioncriteriosejComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcordioncriteriosejComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
