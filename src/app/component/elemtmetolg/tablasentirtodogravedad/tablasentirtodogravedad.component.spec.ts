import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablasentirtodogravedadComponent } from './tablasentirtodogravedad.component';

describe('TablasentirtodogravedadComponent', () => {
  let component: TablasentirtodogravedadComponent;
  let fixture: ComponentFixture<TablasentirtodogravedadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablasentirtodogravedadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablasentirtodogravedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
