import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanteIniComponent } from './plante-ini.component';

describe('PlanteIniComponent', () => {
  let component: PlanteIniComponent;
  let fixture: ComponentFixture<PlanteIniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanteIniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanteIniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
