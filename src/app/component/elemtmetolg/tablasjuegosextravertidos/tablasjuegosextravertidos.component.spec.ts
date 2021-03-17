import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablasjuegosextravertidosComponent } from './tablasjuegosextravertidos.component';

describe('TablasjuegosextravertidosComponent', () => {
  let component: TablasjuegosextravertidosComponent;
  let fixture: ComponentFixture<TablasjuegosextravertidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablasjuegosextravertidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablasjuegosextravertidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
