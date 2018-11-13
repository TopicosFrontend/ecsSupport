import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEcsComponent } from './header-ecs.component';

describe('HeaderEcsComponent', () => {
  let component: HeaderEcsComponent;
  let fixture: ComponentFixture<HeaderEcsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderEcsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderEcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
