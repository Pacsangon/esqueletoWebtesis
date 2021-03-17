import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropTrabComponent } from './prop-trab.component';

describe('PropTrabComponent', () => {
  let component: PropTrabComponent;
  let fixture: ComponentFixture<PropTrabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropTrabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropTrabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
