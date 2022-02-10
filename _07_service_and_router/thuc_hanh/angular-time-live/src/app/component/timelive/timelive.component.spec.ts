import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeliveComponent } from './timelive.component';

describe('TimeliveComponent', () => {
  let component: TimeliveComponent;
  let fixture: ComponentFixture<TimeliveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeliveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeliveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
