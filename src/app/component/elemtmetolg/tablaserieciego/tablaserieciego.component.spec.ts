import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaserieciegoComponent } from './tablaserieciego.component';

describe('TablaserieciegoComponent', () => {
  let component: TablaserieciegoComponent;
  let fixture: ComponentFixture<TablaserieciegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaserieciegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaserieciegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
