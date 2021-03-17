import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablasecuenciaespejoComponent } from './tablasecuenciaespejo.component';

describe('TablasecuenciaespejoComponent', () => {
  let component: TablasecuenciaespejoComponent;
  let fixture: ComponentFixture<TablasecuenciaespejoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablasecuenciaespejoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablasecuenciaespejoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
