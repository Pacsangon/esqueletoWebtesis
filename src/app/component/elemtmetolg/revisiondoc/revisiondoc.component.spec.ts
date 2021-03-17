import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisiondocComponent } from './revisiondoc.component';

describe('RevisiondocComponent', () => {
  let component: RevisiondocComponent;
  let fixture: ComponentFixture<RevisiondocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisiondocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisiondocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
