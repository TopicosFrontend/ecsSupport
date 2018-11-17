import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTransferFormComponent } from './page-transfer-form.component';

describe('PageTransferFormComponent', () => {
  let component: PageTransferFormComponent;
  let fixture: ComponentFixture<PageTransferFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTransferFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTransferFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
