import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablamodoComponent } from './tablamodo.component';

describe('TablamodoComponent', () => {
  let component: TablamodoComponent;
  let fixture: ComponentFixture<TablamodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablamodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablamodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
