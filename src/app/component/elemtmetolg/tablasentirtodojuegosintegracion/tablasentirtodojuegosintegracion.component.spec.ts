import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablasentirtodojuegosintegracionComponent } from './tablasentirtodojuegosintegracion.component';

describe('TablasentirtodojuegosintegracionComponent', () => {
  let component: TablasentirtodojuegosintegracionComponent;
  let fixture: ComponentFixture<TablasentirtodojuegosintegracionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablasentirtodojuegosintegracionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablasentirtodojuegosintegracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
