import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaromsComponent } from './diaroms.component';

describe('DiaromsComponent', () => {
  let component: DiaromsComponent;
  let fixture: ComponentFixture<DiaromsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaromsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaromsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
