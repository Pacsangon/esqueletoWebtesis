import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajoDeCampoComponent } from './trabajo-de-campo.component';

describe('TrabajoDeCampoComponent', () => {
  let component: TrabajoDeCampoComponent;
  let fixture: ComponentFixture<TrabajoDeCampoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabajoDeCampoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajoDeCampoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
