import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablasecuenciaimageneslenguajesComponent } from './tablasecuenciaimageneslenguajes.component';

describe('TablasecuenciaimageneslenguajesComponent', () => {
  let component: TablasecuenciaimageneslenguajesComponent;
  let fixture: ComponentFixture<TablasecuenciaimageneslenguajesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablasecuenciaimageneslenguajesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablasecuenciaimageneslenguajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
