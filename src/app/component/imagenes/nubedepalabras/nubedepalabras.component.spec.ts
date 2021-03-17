import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NubedepalabrasComponent } from './nubedepalabras.component';

describe('NubedepalabrasComponent', () => {
  let component: NubedepalabrasComponent;
  let fixture: ComponentFixture<NubedepalabrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NubedepalabrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NubedepalabrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
