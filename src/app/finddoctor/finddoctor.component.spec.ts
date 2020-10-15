import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinddoctorComponent } from './finddoctor.component';

describe('FinddoctorComponent', () => {
  let component: FinddoctorComponent;
  let fixture: ComponentFixture<FinddoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinddoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinddoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
