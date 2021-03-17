import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablasentirtodocaminatasComponent } from './tablasentirtodocaminatas.component';

describe('TablasentirtodocaminatasComponent', () => {
  let component: TablasentirtodocaminatasComponent;
  let fixture: ComponentFixture<TablasentirtodocaminatasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablasentirtodocaminatasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablasentirtodocaminatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
