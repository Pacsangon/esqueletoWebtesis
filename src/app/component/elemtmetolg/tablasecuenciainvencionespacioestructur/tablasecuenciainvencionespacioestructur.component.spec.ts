import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablasecuenciainvencionespacioestructurComponent } from './tablasecuenciainvencionespacioestructur.component';

describe('TablasecuenciainvencionespacioestructurComponent', () => {
  let component: TablasecuenciainvencionespacioestructurComponent;
  let fixture: ComponentFixture<TablasecuenciainvencionespacioestructurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablasecuenciainvencionespacioestructurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablasecuenciainvencionespacioestructurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
