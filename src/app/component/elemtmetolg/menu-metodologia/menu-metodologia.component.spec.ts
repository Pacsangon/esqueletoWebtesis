import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMetodologiaComponent } from './menu-metodologia.component';

describe('MenuMetodologiaComponent', () => {
  let component: MenuMetodologiaComponent;
  let fixture: ComponentFixture<MenuMetodologiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuMetodologiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMetodologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
