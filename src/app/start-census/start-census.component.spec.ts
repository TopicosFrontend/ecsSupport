import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartCensusComponent } from './start-census.component';

describe('StartCensusComponent', () => {
  let component: StartCensusComponent;
  let fixture: ComponentFixture<StartCensusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartCensusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartCensusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
