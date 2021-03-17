import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcoteoricoComponent } from './marcoteorico.component';

describe('MarcoteoricoComponent', () => {
  let component: MarcoteoricoComponent;
  let fixture: ComponentFixture<MarcoteoricoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcoteoricoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcoteoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
