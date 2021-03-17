import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoejercicioComponent } from './infoejercicio.component';

describe('InfoejercicioComponent', () => {
  let component: InfoejercicioComponent;
  let fixture: ComponentFixture<InfoejercicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoejercicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoejercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
