import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablambosComponent } from './tablambos.component';

describe('TablambosComponent', () => {
  let component: TablambosComponent;
  let fixture: ComponentFixture<TablambosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablambosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablambosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
