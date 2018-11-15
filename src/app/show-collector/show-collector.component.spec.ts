import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCollectorComponent } from './show-collector.component';

describe('ShowCollectorComponent', () => {
  let component: ShowCollectorComponent;
  let fixture: ComponentFixture<ShowCollectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCollectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCollectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
