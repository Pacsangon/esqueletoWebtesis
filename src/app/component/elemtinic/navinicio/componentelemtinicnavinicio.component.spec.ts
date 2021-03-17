import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentelemtinicnavinicioComponent } from './componentelemtinicnavinicio.component';

describe('ComponentelemtinicnavinicioComponent', () => {
  let component: ComponentelemtinicnavinicioComponent;
  let fixture: ComponentFixture<ComponentelemtinicnavinicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentelemtinicnavinicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentelemtinicnavinicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
