import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavVomponentComponent } from './nav-vomponent.component';

describe('NavVomponentComponent', () => {
  let component: NavVomponentComponent;
  let fixture: ComponentFixture<NavVomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavVomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavVomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
