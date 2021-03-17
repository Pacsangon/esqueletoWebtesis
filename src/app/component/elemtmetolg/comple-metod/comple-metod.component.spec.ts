import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleMetodComponent } from './comple-metod.component';

describe('CompleMetodComponent', () => {
  let component: CompleMetodComponent;
  let fixture: ComponentFixture<CompleMetodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleMetodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleMetodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
