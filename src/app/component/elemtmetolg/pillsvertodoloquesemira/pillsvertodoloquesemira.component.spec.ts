import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillsvertodoloquesemiraComponent } from './pillsvertodoloquesemira.component';

describe('PillsvertodoloquesemiraComponent', () => {
  let component: PillsvertodoloquesemiraComponent;
  let fixture: ComponentFixture<PillsvertodoloquesemiraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillsvertodoloquesemiraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillsvertodoloquesemiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
