import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLobbyComponent } from './page-lobby.component';

describe('PageLobbyComponent', () => {
  let component: PageLobbyComponent;
  let fixture: ComponentFixture<PageLobbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLobbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
