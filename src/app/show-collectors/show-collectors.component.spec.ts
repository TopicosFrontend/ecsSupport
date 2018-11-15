import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCollectorsComponent } from './show-collectors.component';

describe('ShowCollectorsComponent', () => {
  let component: ShowCollectorsComponent;
  let fixture: ComponentFixture<ShowCollectorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCollectorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCollectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
