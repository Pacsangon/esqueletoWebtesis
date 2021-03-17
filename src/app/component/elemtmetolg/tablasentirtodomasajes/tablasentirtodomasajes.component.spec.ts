import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablasentirtodomasajesComponent } from './tablasentirtodomasajes.component';

describe('TablasentirtodomasajesComponent', () => {
  let component: TablasentirtodomasajesComponent;
  let fixture: ComponentFixture<TablasentirtodomasajesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablasentirtodomasajesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablasentirtodomasajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
