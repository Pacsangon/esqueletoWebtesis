import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablasentirtodoejerciciosgeneralesComponent } from './tablasentirtodoejerciciosgenerales.component';

describe('TablasentirtodoejerciciosgeneralesComponent', () => {
  let component: TablasentirtodoejerciciosgeneralesComponent;
  let fixture: ComponentFixture<TablasentirtodoejerciciosgeneralesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablasentirtodoejerciciosgeneralesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablasentirtodoejerciciosgeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
