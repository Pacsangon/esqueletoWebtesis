import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreselecciontecnicasComponent } from './preselecciontecnicas.component';

describe('PreselecciontecnicasComponent', () => {
  let component: PreselecciontecnicasComponent;
  let fixture: ComponentFixture<PreselecciontecnicasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreselecciontecnicasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreselecciontecnicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
