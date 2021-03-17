import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablasentirtodoComponent } from './tablasentirtodo.component';

describe('TablasentirtodoComponent', () => {
  let component: TablasentirtodoComponent;
  let fixture: ComponentFixture<TablasentirtodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablasentirtodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablasentirtodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
