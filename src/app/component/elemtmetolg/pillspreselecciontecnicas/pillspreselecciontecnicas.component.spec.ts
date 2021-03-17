import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillspreselecciontecnicasComponent } from './pillspreselecciontecnicas.component';

describe('PillspreselecciontecnicasComponent', () => {
  let component: PillspreselecciontecnicasComponent;
  let fixture: ComponentFixture<PillspreselecciontecnicasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillspreselecciontecnicasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillspreselecciontecnicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
