import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCollectorsComponent } from './register-collectors.component';

describe('RegisterCollectorsComponent', () => {
  let component: RegisterCollectorsComponent;
  let fixture: ComponentFixture<RegisterCollectorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterCollectorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCollectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
