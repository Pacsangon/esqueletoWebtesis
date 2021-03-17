import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaseriespacioComponent } from './tablaseriespacio.component';

describe('TablaseriespacioComponent', () => {
  let component: TablaseriespacioComponent;
  let fixture: ComponentFixture<TablaseriespacioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaseriespacioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaseriespacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
