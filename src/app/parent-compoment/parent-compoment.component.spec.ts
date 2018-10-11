import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCompomentComponent } from './parent-compoment.component';

describe('ParentCompomentComponent', () => {
  let component: ParentCompomentComponent;
  let fixture: ComponentFixture<ParentCompomentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentCompomentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentCompomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
