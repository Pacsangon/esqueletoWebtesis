import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablatemasComponent } from './tablatemas.component';

describe('TablatemasComponent', () => {
  let component: TablatemasComponent;
  let fixture: ComponentFixture<TablatemasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablatemasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablatemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
