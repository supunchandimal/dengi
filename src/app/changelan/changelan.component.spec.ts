import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangelanComponent } from './changelan.component';

describe('ChangelanComponent', () => {
  let component: ChangelanComponent;
  let fixture: ComponentFixture<ChangelanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangelanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangelanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
