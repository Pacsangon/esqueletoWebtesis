import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillactivardistintosentidosComponent } from './pillactivardistintosentidos.component';

describe('PillactivardistintosentidosComponent', () => {
  let component: PillactivardistintosentidosComponent;
  let fixture: ComponentFixture<PillactivardistintosentidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillactivardistintosentidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillactivardistintosentidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
